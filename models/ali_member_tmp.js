const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_member_tmp', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    transtype: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paytype: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paydate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    credittype: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sendtype: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cstreet: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "mcode_2"
    },
    name_f: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name_e: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    posid: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    mdate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birthday: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    national: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    id_tax: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    id_card: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    home_t: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    office_t: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mcode_acc: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    bonusrec: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bankcode: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    branch: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    acc_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    acc_no: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    acc_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    acc_prov: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sv_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sp_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sp_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    upa_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    upa_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    complete: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    compdate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    modate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usercode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    name_b: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    occupation: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mar_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mar_age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    beneficiaries: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    relation: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    districtId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amphurId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    provinceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    inv_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur1: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "S"
    },
    pos_cur2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur4: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rpos_cur4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    memdesc: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    cmp: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cmp2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cmp3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ccmp: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ccmp2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ccmp3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    building: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    village: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    soi: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ewallet: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    bmdate1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bmdate2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bmdate3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cbmdate1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cbmdate2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cbmdate3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    online: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cname_f: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cname_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cname_e: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cname_b: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cbirthday: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cnational: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cid_tax: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cid_card: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    caddress: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cbuilding: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cvillage: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    csoi: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    czip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chome_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    coffice_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cmobile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cfax: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    csex: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cemail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cdistrictId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    camphurId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cprovinceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iname_f: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iname_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    irelation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iphone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iid_card: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status_doc: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_expire: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_terminate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    terminate_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status_suspend: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    suspend_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status_blacklist: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_ato: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sletter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sinv_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtoption: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mcode_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cancel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sbook: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sbinv_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cid_mobile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bewallet: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    bvoucher: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    voucher: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    manager: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mtype: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uidbase: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_member_tmp',
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
        name: "mcode_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mcode" },
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
        name: "name_t",
        using: "BTREE",
        fields: [
          { name: "name_t" },
        ]
      },
    ]
  });
};
