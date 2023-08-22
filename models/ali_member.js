const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_member', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "mcode_3"
    },
    name_f: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name_e: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    posid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mdate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    birthday: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    national: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_tax: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_card: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_card_img: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    id_card_img_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    home_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    office_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mcode_acc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bonusrec: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bankcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    branch: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    acc_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    acc_no: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    acc_no_img: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    acc_no_img_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    acc_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    acc_prov: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sv_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sp_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sp_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sp_code2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sp_name2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    upa_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    upa_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lr: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    complete: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    compdate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    modate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    usercode: {
      type: DataTypes.STRING(255),
      allowNull: false
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
      type: DataTypes.STRING(255),
      allowNull: false
    },
    amphurId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    provinceId: {
      type: DataTypes.STRING(255),
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
    oid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur1: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    pos_cur_tmp: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rpos_cur4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pos_cur3_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
    eatoship: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ecom: {
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
    cstreet: {
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
      type: DataTypes.DATE(6),
      allowNull: true
    },
    status_suspend: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    suspend_date: {
      type: DataTypes.DATE(6),
      allowNull: true
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
    setregis: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    slr: {
      type: DataTypes.STRING(11),
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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mtype1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mtype2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mvat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uidbase: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    exp_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    head_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pv_l: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv_c: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    hpv_l: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    hpv_c: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv_l_nextmonth: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv_c_nextmonth: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv_l_lastmonth1: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv_c_lastmonth1: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv_l_lastmonth2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv_c_lastmonth2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    rcode_star: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bunit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    province: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    line_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    facebook_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type_com: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exp_pos: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    exp_pos_60: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trip_private: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    trip_team: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    myfile1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    myfile2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cline_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cfacebook_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    profile_img: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    atocom: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hpv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    line_depth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    line_lft: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    line_rgt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ocert: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    line_center: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    distributor_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vat_type: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    vat_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sponsor_depth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sponsor_lft: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sponsor_rgt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    agency_ref_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tc_value: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    member_type: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    membership_img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    membership_img_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_member',
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
        name: "mcode_3",
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
      {
        name: "upa_code",
        using: "BTREE",
        fields: [
          { name: "upa_code" },
        ]
      },
      {
        name: "sp_code",
        using: "BTREE",
        fields: [
          { name: "sp_code" },
        ]
      },
      {
        name: "pos_cur",
        using: "BTREE",
        fields: [
          { name: "pos_cur" },
        ]
      },
      {
        name: "pos_cur2",
        using: "BTREE",
        fields: [
          { name: "pos_cur2" },
        ]
      },
      {
        name: "name_b",
        using: "BTREE",
        fields: [
          { name: "name_b" },
        ]
      },
      {
        name: "pos_cur1",
        using: "BTREE",
        fields: [
          { name: "pos_cur1" },
        ]
      },
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "exp_date" },
        ]
      },
      {
        name: "mcode_2",
        using: "BTREE",
        fields: [
          { name: "mcode" },
          { name: "upa_code" },
          { name: "lr" },
        ]
      },
      {
        name: "pos_cur_2",
        using: "BTREE",
        fields: [
          { name: "pos_cur" },
          { name: "status_terminate" },
          { name: "locationbase" },
        ]
      },
      {
        name: "hpv",
        using: "BTREE",
        fields: [
          { name: "hpv" },
        ]
      },
      {
        name: "atocom",
        using: "BTREE",
        fields: [
          { name: "atocom" },
        ]
      },
      {
        name: "status_terminate",
        using: "BTREE",
        fields: [
          { name: "status_terminate" },
        ]
      },
      {
        name: "ali_member_group_id_ce957cb2",
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "ali_member_vat_group_id_40b6fbfd",
        using: "BTREE",
        fields: [
          { name: "vat_group_id" },
        ]
      },
      {
        name: "ali_member_agency_ref_id_b8260d03",
        using: "BTREE",
        fields: [
          { name: "agency_ref_id" },
        ]
      },
    ]
  });
};
