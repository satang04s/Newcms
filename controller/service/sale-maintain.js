const models = require("../../models");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

exports.getSaleMaintain = async (selectDate) => {
  const inputDate = new Date(selectDate);
  const startDate = new Date(inputDate);
  startDate.setDate(1); // Set to the first day of the month

  const endDate = new Date(inputDate); 
  // endDate.setDate(30)
  endDate.setDate(inputDate.getDate());
  endDate.setHours(23, 59, 59, 999);

  console.log({ startDate, endDate });

  const memberStartDate = new Date(endDate);
  memberStartDate.setDate(endDate.getDate() - 60); // Subtract 60 days from the endDate
  console.log({ memberStartDate, endDate });

  const where = {
    sadate: {
      [Op.between]: [startDate, endDate],
    },
    // sa_type: ["A", "AM"],
    sa_type: ["A", "AM", "Z"],
    tot_pv: {
      [Op.gt]: 0,
    },
    cancel: 0,
  };

  // ============================== >>>>>>>>>>>>>>>>>
  // use this condition from existing member who register in Aug-2023 with 2Month Except MonthQualify
  const whereDistributorDate = {
    distributor_date: {
      [Op.between]: ["2023-08-01", endDate],
    },
    pos_cur: "VIP",
    status_terminate: 0,
    status_suspend: 0,
  };

  const attributesDistributorDate = [
    "name_t",
    [Sequelize.literal("'A'"), "sa_type"],
    "mcode",
    [Sequelize.literal("100"), "tot_pv"],
  ];

  const aliMemberArr = await models.ali_member.findAll({
    attributes: attributesDistributorDate,
    where: whereDistributorDate,
    group: ["mcode"],
  });
  // <<<<<<<<<< ======================================

  const attributes = [
    "name_t",
    "sa_type",
    "mcode",
    [Sequelize.fn("SUM", Sequelize.col("tot_pv")), "tot_pv"],
  ];

  // const aliAsalehArr = await models.ali_asaleh.findAll({
  //     attributes: attributes,
  //     where: where,
  //     group: ["mcode"],
  // })

  const aliHoldheadArr = await models.ali_holdhead.findAll({
    attributes: attributes,
    where: where,
    group: ["mcode"],
  });

  // const combineData = aliAsalehArr.concat(aliHoldheadArr)
  const combineData = aliHoldheadArr.concat(aliMemberArr);
  // const combineData = aliMemberArr;
  // const combineData = aliHoldheadArr;

  function checkSaleMaintainFunction(inputArray) {
    const resultMap = {};
    inputArray.map((item) => {
      const key = `${item.dataValues.mcode}`;
      if (!resultMap[key]) {
        resultMap[key] = {
          mcode: item.dataValues.mcode,
          total_pv: 0,
        };
      }
      resultMap[key].total_pv += +item.dataValues.tot_pv;
    });

    const outputArray = Object.values(resultMap);
    return outputArray;
  }
  const salesMaintain = checkSaleMaintainFunction(combineData)
    .filter((item) => item.total_pv >= 100)
    .reduce(
      (arr, obj) => (!arr.includes(obj.mcode) && arr.push(obj.mcode), arr),
      []
    );

  return salesMaintain;
};
