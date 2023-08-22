const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_asaleh', {
    sano: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pano: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sadate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sctime: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    inv_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inv_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sp_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sp_pos: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    name_f: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total_vat: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total_net: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total_invat: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total_exvat: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    customer_total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    tot_pv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    tot_bv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    tot_fv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    tot_sppv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    tot_weight: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    usercode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    trnf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sa_type: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid_branch: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    lid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dl: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cancel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    send: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    txtoption: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    chkCash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkFuture: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkTransfer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkCredit1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkCredit2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkCredit3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkCredit4: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkInternet: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkDiscount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkOther: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtCash: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtFuture: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtTransfer: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ewallet: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtCredit1: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtCredit2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtCredit3: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtCredit4: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtInternet: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtDiscount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtOther: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtSending: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    optionCash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionFuture: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionTransfer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionCredit1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionCredit2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionCredit3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionCredit4: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionInternet: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionDiscount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionOther: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    discount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    print: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ewallet_before: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ewallet_after: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ipay: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pay_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hcancel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    caddress: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cdistrictId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    camphurId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cprovinceId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    czip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sender_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    receive: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    receive_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    asend: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ato_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ato_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    online: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hpv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    htotal: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    hdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    scheck: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    checkportal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bmcauto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cancel_date: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    uid_cancel: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cmobile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid_sender: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid_receive: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mbase: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bprice: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    crate: {
      type: DataTypes.DECIMAL(11,6),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ref: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    selectCash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    selectTransfer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    selectCredit1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    selectCredit2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    selectCredit3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    selectDiscount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    selectInternet: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtVoucher: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    optionVoucher: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    selectVoucher: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtTransfer1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionTransfer1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    selectTransfer1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtTransfer2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionTransfer2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    selectTransfer2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtTransfer3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionTransfer3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    selectTransfer3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status_package: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    txtPremium: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0.00
    },
    chkPremium: {
      type: DataTypes.STRING(8),
      allowNull: true,
      defaultValue: "0"
    },
    selectPremium: {
      type: DataTypes.STRING(8),
      allowNull: true,
      defaultValue: "0"
    },
    optionPremium: {
      type: DataTypes.STRING(128),
      allowNull: true,
      defaultValue: "0"
    },
    bill_state: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    order_number: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    credit_note_number: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    chktc: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    optiontc: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    selecttc: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    txttc: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_asaleh',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sano",
        using: "BTREE",
        fields: [
          { name: "sano" },
        ]
      },
      {
        name: "sadate",
        using: "BTREE",
        fields: [
          { name: "sadate" },
        ]
      },
      {
        name: "sano_2",
        using: "BTREE",
        fields: [
          { name: "sano" },
          { name: "tot_pv" },
        ]
      },
      {
        name: "mcode",
        using: "BTREE",
        fields: [
          { name: "mcode" },
        ]
      },
      {
        name: "mcode_2",
        using: "BTREE",
        fields: [
          { name: "mcode" },
          { name: "tot_pv" },
        ]
      },
      {
        name: "sano_3",
        using: "BTREE",
        fields: [
          { name: "sano" },
          { name: "mcode" },
        ]
      },
      {
        name: "sadate_2",
        using: "BTREE",
        fields: [
          { name: "sadate" },
          { name: "mcode" },
        ]
      },
      {
        name: "sadate_3",
        using: "BTREE",
        fields: [
          { name: "sadate" },
          { name: "mcode" },
          { name: "sa_type" },
          { name: "cancel" },
        ]
      },
      {
        name: "sadate_4",
        using: "BTREE",
        fields: [
          { name: "sadate" },
          { name: "mcode" },
          { name: "tot_bv" },
          { name: "sa_type" },
          { name: "cancel" },
        ]
      },
      {
        name: "sadate_5",
        using: "BTREE",
        fields: [
          { name: "sadate" },
          { name: "sa_type" },
          { name: "cancel" },
        ]
      },
      {
        name: "cancel",
        using: "BTREE",
        fields: [
          { name: "cancel" },
        ]
      },
      {
        name: "tot_pv",
        using: "BTREE",
        fields: [
          { name: "tot_pv" },
        ]
      },
      {
        name: "sa_type",
        using: "BTREE",
        fields: [
          { name: "sa_type" },
        ]
      },
      {
        name: "ali_asaleh_member_id_2092b2cf",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
