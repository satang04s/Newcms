var DataTypes = require("sequelize").DataTypes;
var _account_useraccount = require("./account_useraccount");
var _accounting_paymenttype = require("./accounting_paymenttype");
var _accounting_statementstate = require("./accounting_statementstate");
var _accounting_statementtype = require("./accounting_statementtype");
var _ali_ac = require("./ali_ac");
var _ali_adjust = require("./ali_adjust");
var _ali_aging = require("./ali_aging");
var _ali_ambonus = require("./ali_ambonus");
var _ali_apv = require("./ali_apv");
var _ali_around = require("./ali_around");
var _ali_asaled = require("./ali_asaled");
var _ali_asaleh = require("./ali_asaleh");
var _ali_atoasaled = require("./ali_atoasaled");
var _ali_atoasaleh = require("./ali_atoasaleh");
var _ali_autocals = require("./ali_autocals");
var _ali_bank = require("./ali_bank");
var _ali_bank_new = require("./ali_bank_new");
var _ali_bank_old = require("./ali_bank_old");
var _ali_bbuy = require("./ali_bbuy");
var _ali_bc = require("./ali_bc");
var _ali_binary_newpoint = require("./ali_binary_newpoint");
var _ali_binary_report = require("./ali_binary_report");
var _ali_bm = require("./ali_bm");
var _ali_bm1 = require("./ali_bm1");
var _ali_bm2 = require("./ali_bm2");
var _ali_bmbonus = require("./ali_bmbonus");
var _ali_bmnew = require("./ali_bmnew");
var _ali_bround = require("./ali_bround");
var _ali_calc_poschange = require("./ali_calc_poschange");
var _ali_calc_poschange1 = require("./ali_calc_poschange1");
var _ali_calc_poschange2 = require("./ali_calc_poschange2");
var _ali_calc_poschange3 = require("./ali_calc_poschange3");
var _ali_cc = require("./ali_cc");
var _ali_checkdownline = require("./ali_checkdownline");
var _ali_checkdownline_sp = require("./ali_checkdownline_sp");
var _ali_cm = require("./ali_cm");
var _ali_cmbonus = require("./ali_cmbonus");
var _ali_cmbonus_b = require("./ali_cmbonus_b");
var _ali_commission = require("./ali_commission");
var _ali_commission_b = require("./ali_commission_b");
var _ali_cpv = require("./ali_cpv");
var _ali_cron = require("./ali_cron");
var _ali_cronjob = require("./ali_cronjob");
var _ali_cround = require("./ali_cround");
var _ali_cround1 = require("./ali_cround1");
var _ali_dc = require("./ali_dc");
var _ali_dm = require("./ali_dm");
var _ali_dmbonus = require("./ali_dmbonus");
var _ali_dpv = require("./ali_dpv");
var _ali_dround = require("./ali_dround");
var _ali_eatoship = require("./ali_eatoship");
var _ali_ec = require("./ali_ec");
var _ali_ecom = require("./ali_ecom");
var _ali_ecommision = require("./ali_ecommision");
var _ali_ed = require("./ali_ed");
var _ali_em = require("./ali_em");
var _ali_embonus = require("./ali_embonus");
var _ali_epv = require("./ali_epv");
var _ali_esaled = require("./ali_esaled");
var _ali_esaleh = require("./ali_esaleh");
var _ali_ewallet = require("./ali_ewallet");
var _ali_ewallet_commission = require("./ali_ewallet_commission");
var _ali_ewallet_tranfer = require("./ali_ewallet_tranfer");
var _ali_ewalletd = require("./ali_ewalletd");
var _ali_expdate = require("./ali_expdate");
var _ali_fc = require("./ali_fc");
var _ali_fm = require("./ali_fm");
var _ali_fmbonus = require("./ali_fmbonus");
var _ali_fpv = require("./ali_fpv");
var _ali_fround = require("./ali_fround");
var _ali_global = require("./ali_global");
var _ali_gmbonus = require("./ali_gmbonus");
var _ali_holddesc = require("./ali_holddesc");
var _ali_holdhead = require("./ali_holdhead");
var _ali_import_stock_d = require("./ali_import_stock_d");
var _ali_import_stock_h = require("./ali_import_stock_h");
var _ali_invent = require("./ali_invent");
var _ali_inventory_order = require("./ali_inventory_order");
var _ali_isaled = require("./ali_isaled");
var _ali_isaleh = require("./ali_isaleh");
var _ali_istockd = require("./ali_istockd");
var _ali_istockh = require("./ali_istockh");
var _ali_location_base = require("./ali_location_base");
var _ali_log = require("./ali_log");
var _ali_log_change = require("./ali_log_change");
var _ali_log_eatoship = require("./ali_log_eatoship");
var _ali_log_ecom = require("./ali_log_ecom");
var _ali_log_ewallet = require("./ali_log_ewallet");
var _ali_log_hpv = require("./ali_log_hpv");
var _ali_log_ipay = require("./ali_log_ipay");
var _ali_log_ktc = require("./ali_log_ktc");
var _ali_log_voucher = require("./ali_log_voucher");
var _ali_log_wallet = require("./ali_log_wallet");
var _ali_lr_def = require("./ali_lr_def");
var _ali_mc = require("./ali_mc");
var _ali_member = require("./ali_member");
var _ali_member_favorite = require("./ali_member_favorite");
var _ali_member_show = require("./ali_member_show");
var _ali_member_tmp = require("./ali_member_tmp");
var _ali_mm = require("./ali_mm");
var _ali_mmbonus = require("./ali_mmbonus");
var _ali_mmobile = require("./ali_mmobile");
var _ali_mmodesc = require("./ali_mmodesc");
var _ali_moround = require("./ali_moround");
var _ali_mpv = require("./ali_mpv");
var _ali_msaled = require("./ali_msaled");
var _ali_msaleh = require("./ali_msaleh");
var _ali_my_pv = require("./ali_my_pv");
var _ali_nation = require("./ali_nation");
var _ali_news = require("./ali_news");
var _ali_ombonus = require("./ali_ombonus");
var _ali_oon = require("./ali_oon");
var _ali_ostockd = require("./ali_ostockd");
var _ali_ostockh = require("./ali_ostockh");
var _ali_package_invcode = require("./ali_package_invcode");
var _ali_pairbonus = require("./ali_pairbonus");
var _ali_payment = require("./ali_payment");
var _ali_payment_branch = require("./ali_payment_branch");
var _ali_payment_type = require("./ali_payment_type");
var _ali_pc = require("./ali_pc");
var _ali_pmbonus = require("./ali_pmbonus");
var _ali_poschange = require("./ali_poschange");
var _ali_position = require("./ali_position");
var _ali_position2 = require("./ali_position2");
var _ali_pospv = require("./ali_pospv");
var _ali_pospv_tmp = require("./ali_pospv_tmp");
var _ali_ppv = require("./ali_ppv");
var _ali_product = require("./ali_product");
var _ali_product_invcode = require("./ali_product_invcode");
var _ali_product_invent = require("./ali_product_invent");
var _ali_product_invent_log = require("./ali_product_invent_log");
var _ali_product_invent_log_r = require("./ali_product_invent_log_r");
var _ali_product_package = require("./ali_product_package");
var _ali_product_package1 = require("./ali_product_package1");
var _ali_productgroup = require("./ali_productgroup");
var _ali_promotion = require("./ali_promotion");
var _ali_pround = require("./ali_pround");
var _ali_rc = require("./ali_rc");
var _ali_rccode = require("./ali_rccode");
var _ali_report_cron = require("./ali_report_cron");
var _ali_report_member = require("./ali_report_member");
var _ali_report_point = require("./ali_report_point");
var _ali_report_point1 = require("./ali_report_point1");
var _ali_report_promotion = require("./ali_report_promotion");
var _ali_report_promotion1 = require("./ali_report_promotion1");
var _ali_rsaled = require("./ali_rsaled");
var _ali_rsaleh = require("./ali_rsaleh");
var _ali_rscode = require("./ali_rscode");
var _ali_sale_ewallet = require("./ali_sale_ewallet");
var _ali_sale_hold = require("./ali_sale_hold");
var _ali_sc = require("./ali_sc");
var _ali_sending = require("./ali_sending");
var _ali_smbonus = require("./ali_smbonus");
var _ali_sms = require("./ali_sms");
var _ali_special_point = require("./ali_special_point");
var _ali_special_point_group = require("./ali_special_point_group");
var _ali_sponsor = require("./ali_sponsor");
var _ali_status = require("./ali_status");
var _ali_stdesc = require("./ali_stdesc");
var _ali_stockcard_e = require("./ali_stockcard_e");
var _ali_stockcard_r = require("./ali_stockcard_r");
var _ali_stockcard_s = require("./ali_stockcard_s");
var _ali_stockeep = require("./ali_stockeep");
var _ali_stocks = require("./ali_stocks");
var _ali_structure_binary = require("./ali_structure_binary");
var _ali_structure_binary_rcode = require("./ali_structure_binary_rcode");
var _ali_structure_sponsor = require("./ali_structure_sponsor");
var _ali_subuser = require("./ali_subuser");
var _ali_supplier = require("./ali_supplier");
var _ali_syscomm = require("./ali_syscomm");
var _ali_tax = require("./ali_tax");
var _ali_temp_ad = require("./ali_temp_ad");
var _ali_tmbonus = require("./ali_tmbonus");
var _ali_tmbonus1 = require("./ali_tmbonus1");
var _ali_transfer_ewallet_confirm = require("./ali_transfer_ewallet_confirm");
var _ali_transferewallet_h = require("./ali_transferewallet_h");
var _ali_transfersale_d = require("./ali_transfersale_d");
var _ali_transfersale_h = require("./ali_transfersale_h");
var _ali_trip_bonus = require("./ali_trip_bonus");
var _ali_trip_pv = require("./ali_trip_pv");
var _ali_tround = require("./ali_tround");
var _ali_tsaled = require("./ali_tsaled");
var _ali_tsaleh = require("./ali_tsaleh");
var _ali_upv = require("./ali_upv");
var _ali_user = require("./ali_user");
var _ali_voucher = require("./ali_voucher");
var _ali_webcfg = require("./ali_webcfg");
var _amphur = require("./amphur");
var _amphur_postcode = require("./amphur_postcode");
var _ao_collect_sku_2023 = require("./ao_collect_sku_2023");
var _ao_detail_with_pro = require("./ao_detail_with_pro");
var _ao_detail_with_pro_100 = require("./ao_detail_with_pro_100");
var _ao_promotion_logs = require("./ao_promotion_logs");
var _ao_promotion_product = require("./ao_promotion_product");
var _ao_promotionpv_logs = require("./ao_promotionpv_logs");
var _ao_promotionpv_product = require("./ao_promotionpv_product");
var _ao_promotionpv_remain = require("./ao_promotionpv_remain");
var _ao_redeem_reward_logs = require("./ao_redeem_reward_logs");
var _ao_trip_with_sku = require("./ao_trip_with_sku");
var _assetsdw_data = require("./assetsdw_data");
var _auth_group = require("./auth_group");
var _auth_group_permissions = require("./auth_group_permissions");
var _auth_permission = require("./auth_permission");
var _auth_user = require("./auth_user");
var _auth_user_groups = require("./auth_user_groups");
var _auth_user_user_permissions = require("./auth_user_user_permissions");
var _branch_branchgoodsexportitem = require("./branch_branchgoodsexportitem");
var _branch_branchgoodsexportstatement = require("./branch_branchgoodsexportstatement");
var _branch_branchgoodsimportitem = require("./branch_branchgoodsimportitem");
var _branch_branchgoodsimportstatement = require("./branch_branchgoodsimportstatement");
var _branch_branchgoodssnapremainingitem = require("./branch_branchgoodssnapremainingitem");
var _branch_branchgoodssnapremainingstatement = require("./branch_branchgoodssnapremainingstatement");
var _branch_historicalbranchgoodsexportstatement = require("./branch_historicalbranchgoodsexportstatement");
var _branch_historicalbranchgoodsimportstatement = require("./branch_historicalbranchgoodsimportstatement");
var _branch_historicalbranchgoodssnapremainingstatement = require("./branch_historicalbranchgoodssnapremainingstatement");
var _branch_stockadjustitem = require("./branch_stockadjustitem");
var _branch_stockadjuststatement = require("./branch_stockadjuststatement");
var _chkbmbonus = require("./chkbmbonus");
var _district = require("./district");
var _django_admin_log = require("./django_admin_log");
var _django_celery_beat_clockedschedule = require("./django_celery_beat_clockedschedule");
var _django_celery_beat_crontabschedule = require("./django_celery_beat_crontabschedule");
var _django_celery_beat_intervalschedule = require("./django_celery_beat_intervalschedule");
var _django_celery_beat_periodictask = require("./django_celery_beat_periodictask");
var _django_celery_beat_periodictasks = require("./django_celery_beat_periodictasks");
var _django_celery_beat_solarschedule = require("./django_celery_beat_solarschedule");
var _django_celery_results_taskresult = require("./django_celery_results_taskresult");
var _django_content_type = require("./django_content_type");
var _django_migrations = require("./django_migrations");
var _django_session = require("./django_session");
var _ecommerce_dropshippromotion = require("./ecommerce_dropshippromotion");
var _ecommerce_dropshippromotion_items = require("./ecommerce_dropshippromotion_items");
var _ecommerce_dropshippromotion_types = require("./ecommerce_dropshippromotion_types");
var _ecommerce_dropshippromotiontype = require("./ecommerce_dropshippromotiontype");
var _ecommerce_memberdiscount = require("./ecommerce_memberdiscount");
var _ecommerce_membershippingaddress = require("./ecommerce_membershippingaddress");
var _ecommerce_payment = require("./ecommerce_payment");
var _ecommerce_paymenttype = require("./ecommerce_paymenttype");
var _ecommerce_productclass = require("./ecommerce_productclass");
var _ecommerce_shippingbox = require("./ecommerce_shippingbox");
var _ecommerce_t2ppresult = require("./ecommerce_t2ppresult");
var _event_attendee = require("./event_attendee");
var _event_attendee_members = require("./event_attendee_members");
var _event_event = require("./event_event");
var _event_preattendee = require("./event_preattendee");
var _event_preattendee_members = require("./event_preattendee_members");
var _hold_expire = require("./hold_expire");
var _jet_bookmark = require("./jet_bookmark");
var _jet_pinnedapplication = require("./jet_pinnedapplication");
var _matrix_memberactive = require("./matrix_memberactive");
var _member_achievement = require("./member_achievement");
var _member_clientvattype = require("./member_clientvattype");
var _member_memberdocumentcheckup = require("./member_memberdocumentcheckup");
var _member_membergroup = require("./member_membergroup");
var _member_memberlogs = require("./member_memberlogs");
var _member_memberm = require("./member_memberm");
var _member_membersocialtagconfig = require("./member_membersocialtagconfig");
var _member_memberstatusstack = require("./member_memberstatusstack");
var _member_terminate = require("./member_terminate");
var _oauth2_provider_accesstoken = require("./oauth2_provider_accesstoken");
var _oauth2_provider_application = require("./oauth2_provider_application");
var _oauth2_provider_grant = require("./oauth2_provider_grant");
var _oauth2_provider_refreshtoken = require("./oauth2_provider_refreshtoken");
var _province = require("./province");
var _system_lineagent = require("./system_lineagent");
var _system_log_logtravelcredit = require("./system_log_logtravelcredit");
var _system_log_logtravelpoint = require("./system_log_logtravelpoint");
var _tbl_activity_en = require("./tbl_activity_en");
var _tbl_activity_th = require("./tbl_activity_th");
var _trip_travelpointstack = require("./trip_travelpointstack");
var _trip_travelpointusestatement = require("./trip_travelpointusestatement");
var _trip_trip = require("./trip_trip");
var _trip_tripapplication = require("./trip_tripapplication");

function initModels(sequelize) {
  var account_useraccount = _account_useraccount(sequelize, DataTypes);
  var accounting_paymenttype = _accounting_paymenttype(sequelize, DataTypes);
  var accounting_statementstate = _accounting_statementstate(sequelize, DataTypes);
  var accounting_statementtype = _accounting_statementtype(sequelize, DataTypes);
  var ali_ac = _ali_ac(sequelize, DataTypes);
  var ali_adjust = _ali_adjust(sequelize, DataTypes);
  var ali_aging = _ali_aging(sequelize, DataTypes);
  var ali_ambonus = _ali_ambonus(sequelize, DataTypes);
  var ali_apv = _ali_apv(sequelize, DataTypes);
  var ali_around = _ali_around(sequelize, DataTypes);
  var ali_asaled = _ali_asaled(sequelize, DataTypes);
  var ali_asaleh = _ali_asaleh(sequelize, DataTypes);
  var ali_atoasaled = _ali_atoasaled(sequelize, DataTypes);
  var ali_atoasaleh = _ali_atoasaleh(sequelize, DataTypes);
  var ali_autocals = _ali_autocals(sequelize, DataTypes);
  var ali_bank = _ali_bank(sequelize, DataTypes);
  var ali_bank_new = _ali_bank_new(sequelize, DataTypes);
  var ali_bank_old = _ali_bank_old(sequelize, DataTypes);
  var ali_bbuy = _ali_bbuy(sequelize, DataTypes);
  var ali_bc = _ali_bc(sequelize, DataTypes);
  var ali_binary_newpoint = _ali_binary_newpoint(sequelize, DataTypes);
  var ali_binary_report = _ali_binary_report(sequelize, DataTypes);
  var ali_bm = _ali_bm(sequelize, DataTypes);
  var ali_bm1 = _ali_bm1(sequelize, DataTypes);
  var ali_bm2 = _ali_bm2(sequelize, DataTypes);
  var ali_bmbonus = _ali_bmbonus(sequelize, DataTypes);
  var ali_bmnew = _ali_bmnew(sequelize, DataTypes);
  var ali_bround = _ali_bround(sequelize, DataTypes);
  var ali_calc_poschange = _ali_calc_poschange(sequelize, DataTypes);
  var ali_calc_poschange1 = _ali_calc_poschange1(sequelize, DataTypes);
  var ali_calc_poschange2 = _ali_calc_poschange2(sequelize, DataTypes);
  var ali_calc_poschange3 = _ali_calc_poschange3(sequelize, DataTypes);
  var ali_cc = _ali_cc(sequelize, DataTypes);
  var ali_checkdownline = _ali_checkdownline(sequelize, DataTypes);
  var ali_checkdownline_sp = _ali_checkdownline_sp(sequelize, DataTypes);
  var ali_cm = _ali_cm(sequelize, DataTypes);
  var ali_cmbonus = _ali_cmbonus(sequelize, DataTypes);
  var ali_cmbonus_b = _ali_cmbonus_b(sequelize, DataTypes);
  var ali_commission = _ali_commission(sequelize, DataTypes);
  var ali_commission_b = _ali_commission_b(sequelize, DataTypes);
  var ali_cpv = _ali_cpv(sequelize, DataTypes);
  var ali_cron = _ali_cron(sequelize, DataTypes);
  var ali_cronjob = _ali_cronjob(sequelize, DataTypes);
  var ali_cround = _ali_cround(sequelize, DataTypes);
  var ali_cround1 = _ali_cround1(sequelize, DataTypes);
  var ali_dc = _ali_dc(sequelize, DataTypes);
  var ali_dm = _ali_dm(sequelize, DataTypes);
  var ali_dmbonus = _ali_dmbonus(sequelize, DataTypes);
  var ali_dpv = _ali_dpv(sequelize, DataTypes);
  var ali_dround = _ali_dround(sequelize, DataTypes);
  var ali_eatoship = _ali_eatoship(sequelize, DataTypes);
  var ali_ec = _ali_ec(sequelize, DataTypes);
  var ali_ecom = _ali_ecom(sequelize, DataTypes);
  var ali_ecommision = _ali_ecommision(sequelize, DataTypes);
  var ali_ed = _ali_ed(sequelize, DataTypes);
  var ali_em = _ali_em(sequelize, DataTypes);
  var ali_embonus = _ali_embonus(sequelize, DataTypes);
  var ali_epv = _ali_epv(sequelize, DataTypes);
  var ali_esaled = _ali_esaled(sequelize, DataTypes);
  var ali_esaleh = _ali_esaleh(sequelize, DataTypes);
  var ali_ewallet = _ali_ewallet(sequelize, DataTypes);
  var ali_ewallet_commission = _ali_ewallet_commission(sequelize, DataTypes);
  var ali_ewallet_tranfer = _ali_ewallet_tranfer(sequelize, DataTypes);
  var ali_ewalletd = _ali_ewalletd(sequelize, DataTypes);
  var ali_expdate = _ali_expdate(sequelize, DataTypes);
  var ali_fc = _ali_fc(sequelize, DataTypes);
  var ali_fm = _ali_fm(sequelize, DataTypes);
  var ali_fmbonus = _ali_fmbonus(sequelize, DataTypes);
  var ali_fpv = _ali_fpv(sequelize, DataTypes);
  var ali_fround = _ali_fround(sequelize, DataTypes);
  var ali_global = _ali_global(sequelize, DataTypes);
  var ali_gmbonus = _ali_gmbonus(sequelize, DataTypes);
  var ali_holddesc = _ali_holddesc(sequelize, DataTypes);
  var ali_holdhead = _ali_holdhead(sequelize, DataTypes);
  var ali_import_stock_d = _ali_import_stock_d(sequelize, DataTypes);
  var ali_import_stock_h = _ali_import_stock_h(sequelize, DataTypes);
  var ali_invent = _ali_invent(sequelize, DataTypes);
  var ali_inventory_order = _ali_inventory_order(sequelize, DataTypes);
  var ali_isaled = _ali_isaled(sequelize, DataTypes);
  var ali_isaleh = _ali_isaleh(sequelize, DataTypes);
  var ali_istockd = _ali_istockd(sequelize, DataTypes);
  var ali_istockh = _ali_istockh(sequelize, DataTypes);
  var ali_location_base = _ali_location_base(sequelize, DataTypes);
  var ali_log = _ali_log(sequelize, DataTypes);
  var ali_log_change = _ali_log_change(sequelize, DataTypes);
  var ali_log_eatoship = _ali_log_eatoship(sequelize, DataTypes);
  var ali_log_ecom = _ali_log_ecom(sequelize, DataTypes);
  var ali_log_ewallet = _ali_log_ewallet(sequelize, DataTypes);
  var ali_log_hpv = _ali_log_hpv(sequelize, DataTypes);
  var ali_log_ipay = _ali_log_ipay(sequelize, DataTypes);
  var ali_log_ktc = _ali_log_ktc(sequelize, DataTypes);
  var ali_log_voucher = _ali_log_voucher(sequelize, DataTypes);
  var ali_log_wallet = _ali_log_wallet(sequelize, DataTypes);
  var ali_lr_def = _ali_lr_def(sequelize, DataTypes);
  var ali_mc = _ali_mc(sequelize, DataTypes);
  var ali_member = _ali_member(sequelize, DataTypes);
  var ali_member_favorite = _ali_member_favorite(sequelize, DataTypes);
  var ali_member_show = _ali_member_show(sequelize, DataTypes);
  var ali_member_tmp = _ali_member_tmp(sequelize, DataTypes);
  var ali_mm = _ali_mm(sequelize, DataTypes);
  var ali_mmbonus = _ali_mmbonus(sequelize, DataTypes);
  var ali_mmobile = _ali_mmobile(sequelize, DataTypes);
  var ali_mmodesc = _ali_mmodesc(sequelize, DataTypes);
  var ali_moround = _ali_moround(sequelize, DataTypes);
  var ali_mpv = _ali_mpv(sequelize, DataTypes);
  var ali_msaled = _ali_msaled(sequelize, DataTypes);
  var ali_msaleh = _ali_msaleh(sequelize, DataTypes);
  var ali_my_pv = _ali_my_pv(sequelize, DataTypes);
  var ali_nation = _ali_nation(sequelize, DataTypes);
  var ali_news = _ali_news(sequelize, DataTypes);
  var ali_ombonus = _ali_ombonus(sequelize, DataTypes);
  var ali_oon = _ali_oon(sequelize, DataTypes);
  var ali_ostockd = _ali_ostockd(sequelize, DataTypes);
  var ali_ostockh = _ali_ostockh(sequelize, DataTypes);
  var ali_package_invcode = _ali_package_invcode(sequelize, DataTypes);
  var ali_pairbonus = _ali_pairbonus(sequelize, DataTypes);
  var ali_payment = _ali_payment(sequelize, DataTypes);
  var ali_payment_branch = _ali_payment_branch(sequelize, DataTypes);
  var ali_payment_type = _ali_payment_type(sequelize, DataTypes);
  var ali_pc = _ali_pc(sequelize, DataTypes);
  var ali_pmbonus = _ali_pmbonus(sequelize, DataTypes);
  var ali_poschange = _ali_poschange(sequelize, DataTypes);
  var ali_position = _ali_position(sequelize, DataTypes);
  var ali_position2 = _ali_position2(sequelize, DataTypes);
  var ali_pospv = _ali_pospv(sequelize, DataTypes);
  var ali_pospv_tmp = _ali_pospv_tmp(sequelize, DataTypes);
  var ali_ppv = _ali_ppv(sequelize, DataTypes);
  var ali_product = _ali_product(sequelize, DataTypes);
  var ali_product_invcode = _ali_product_invcode(sequelize, DataTypes);
  var ali_product_invent = _ali_product_invent(sequelize, DataTypes);
  var ali_product_invent_log = _ali_product_invent_log(sequelize, DataTypes);
  var ali_product_invent_log_r = _ali_product_invent_log_r(sequelize, DataTypes);
  var ali_product_package = _ali_product_package(sequelize, DataTypes);
  var ali_product_package1 = _ali_product_package1(sequelize, DataTypes);
  var ali_productgroup = _ali_productgroup(sequelize, DataTypes);
  var ali_promotion = _ali_promotion(sequelize, DataTypes);
  var ali_pround = _ali_pround(sequelize, DataTypes);
  var ali_rc = _ali_rc(sequelize, DataTypes);
  var ali_rccode = _ali_rccode(sequelize, DataTypes);
  var ali_report_cron = _ali_report_cron(sequelize, DataTypes);
  var ali_report_member = _ali_report_member(sequelize, DataTypes);
  var ali_report_point = _ali_report_point(sequelize, DataTypes);
  var ali_report_point1 = _ali_report_point1(sequelize, DataTypes);
  var ali_report_promotion = _ali_report_promotion(sequelize, DataTypes);
  var ali_report_promotion1 = _ali_report_promotion1(sequelize, DataTypes);
  var ali_rsaled = _ali_rsaled(sequelize, DataTypes);
  var ali_rsaleh = _ali_rsaleh(sequelize, DataTypes);
  var ali_rscode = _ali_rscode(sequelize, DataTypes);
  var ali_sale_ewallet = _ali_sale_ewallet(sequelize, DataTypes);
  var ali_sale_hold = _ali_sale_hold(sequelize, DataTypes);
  var ali_sc = _ali_sc(sequelize, DataTypes);
  var ali_sending = _ali_sending(sequelize, DataTypes);
  var ali_smbonus = _ali_smbonus(sequelize, DataTypes);
  var ali_sms = _ali_sms(sequelize, DataTypes);
  var ali_special_point = _ali_special_point(sequelize, DataTypes);
  var ali_special_point_group = _ali_special_point_group(sequelize, DataTypes);
  var ali_sponsor = _ali_sponsor(sequelize, DataTypes);
  var ali_status = _ali_status(sequelize, DataTypes);
  var ali_stdesc = _ali_stdesc(sequelize, DataTypes);
  var ali_stockcard_e = _ali_stockcard_e(sequelize, DataTypes);
  var ali_stockcard_r = _ali_stockcard_r(sequelize, DataTypes);
  var ali_stockcard_s = _ali_stockcard_s(sequelize, DataTypes);
  var ali_stockeep = _ali_stockeep(sequelize, DataTypes);
  var ali_stocks = _ali_stocks(sequelize, DataTypes);
  var ali_structure_binary = _ali_structure_binary(sequelize, DataTypes);
  var ali_structure_binary_rcode = _ali_structure_binary_rcode(sequelize, DataTypes);
  var ali_structure_sponsor = _ali_structure_sponsor(sequelize, DataTypes);
  var ali_subuser = _ali_subuser(sequelize, DataTypes);
  var ali_supplier = _ali_supplier(sequelize, DataTypes);
  var ali_syscomm = _ali_syscomm(sequelize, DataTypes);
  var ali_tax = _ali_tax(sequelize, DataTypes);
  var ali_temp_ad = _ali_temp_ad(sequelize, DataTypes);
  var ali_tmbonus = _ali_tmbonus(sequelize, DataTypes);
  var ali_tmbonus1 = _ali_tmbonus1(sequelize, DataTypes);
  var ali_transfer_ewallet_confirm = _ali_transfer_ewallet_confirm(sequelize, DataTypes);
  var ali_transferewallet_h = _ali_transferewallet_h(sequelize, DataTypes);
  var ali_transfersale_d = _ali_transfersale_d(sequelize, DataTypes);
  var ali_transfersale_h = _ali_transfersale_h(sequelize, DataTypes);
  var ali_trip_bonus = _ali_trip_bonus(sequelize, DataTypes);
  var ali_trip_pv = _ali_trip_pv(sequelize, DataTypes);
  var ali_tround = _ali_tround(sequelize, DataTypes);
  var ali_tsaled = _ali_tsaled(sequelize, DataTypes);
  var ali_tsaleh = _ali_tsaleh(sequelize, DataTypes);
  var ali_upv = _ali_upv(sequelize, DataTypes);
  var ali_user = _ali_user(sequelize, DataTypes);
  var ali_voucher = _ali_voucher(sequelize, DataTypes);
  var ali_webcfg = _ali_webcfg(sequelize, DataTypes);
  var amphur = _amphur(sequelize, DataTypes);
  var amphur_postcode = _amphur_postcode(sequelize, DataTypes);
  var ao_collect_sku_2023 = _ao_collect_sku_2023(sequelize, DataTypes);
  var ao_detail_with_pro = _ao_detail_with_pro(sequelize, DataTypes);
  var ao_detail_with_pro_100 = _ao_detail_with_pro_100(sequelize, DataTypes);
  var ao_promotion_logs = _ao_promotion_logs(sequelize, DataTypes);
  var ao_promotion_product = _ao_promotion_product(sequelize, DataTypes);
  var ao_promotionpv_logs = _ao_promotionpv_logs(sequelize, DataTypes);
  var ao_promotionpv_product = _ao_promotionpv_product(sequelize, DataTypes);
  var ao_promotionpv_remain = _ao_promotionpv_remain(sequelize, DataTypes);
  var ao_redeem_reward_logs = _ao_redeem_reward_logs(sequelize, DataTypes);
  var ao_trip_with_sku = _ao_trip_with_sku(sequelize, DataTypes);
  var assetsdw_data = _assetsdw_data(sequelize, DataTypes);
  var auth_group = _auth_group(sequelize, DataTypes);
  var auth_group_permissions = _auth_group_permissions(sequelize, DataTypes);
  var auth_permission = _auth_permission(sequelize, DataTypes);
  var auth_user = _auth_user(sequelize, DataTypes);
  var auth_user_groups = _auth_user_groups(sequelize, DataTypes);
  var auth_user_user_permissions = _auth_user_user_permissions(sequelize, DataTypes);
  var branch_branchgoodsexportitem = _branch_branchgoodsexportitem(sequelize, DataTypes);
  var branch_branchgoodsexportstatement = _branch_branchgoodsexportstatement(sequelize, DataTypes);
  var branch_branchgoodsimportitem = _branch_branchgoodsimportitem(sequelize, DataTypes);
  var branch_branchgoodsimportstatement = _branch_branchgoodsimportstatement(sequelize, DataTypes);
  var branch_branchgoodssnapremainingitem = _branch_branchgoodssnapremainingitem(sequelize, DataTypes);
  var branch_branchgoodssnapremainingstatement = _branch_branchgoodssnapremainingstatement(sequelize, DataTypes);
  var branch_historicalbranchgoodsexportstatement = _branch_historicalbranchgoodsexportstatement(sequelize, DataTypes);
  var branch_historicalbranchgoodsimportstatement = _branch_historicalbranchgoodsimportstatement(sequelize, DataTypes);
  var branch_historicalbranchgoodssnapremainingstatement = _branch_historicalbranchgoodssnapremainingstatement(sequelize, DataTypes);
  var branch_stockadjustitem = _branch_stockadjustitem(sequelize, DataTypes);
  var branch_stockadjuststatement = _branch_stockadjuststatement(sequelize, DataTypes);
  var chkbmbonus = _chkbmbonus(sequelize, DataTypes);
  var district = _district(sequelize, DataTypes);
  var django_admin_log = _django_admin_log(sequelize, DataTypes);
  var django_celery_beat_clockedschedule = _django_celery_beat_clockedschedule(sequelize, DataTypes);
  var django_celery_beat_crontabschedule = _django_celery_beat_crontabschedule(sequelize, DataTypes);
  var django_celery_beat_intervalschedule = _django_celery_beat_intervalschedule(sequelize, DataTypes);
  var django_celery_beat_periodictask = _django_celery_beat_periodictask(sequelize, DataTypes);
  var django_celery_beat_periodictasks = _django_celery_beat_periodictasks(sequelize, DataTypes);
  var django_celery_beat_solarschedule = _django_celery_beat_solarschedule(sequelize, DataTypes);
  var django_celery_results_taskresult = _django_celery_results_taskresult(sequelize, DataTypes);
  var django_content_type = _django_content_type(sequelize, DataTypes);
  var django_migrations = _django_migrations(sequelize, DataTypes);
  var django_session = _django_session(sequelize, DataTypes);
  var ecommerce_dropshippromotion = _ecommerce_dropshippromotion(sequelize, DataTypes);
  var ecommerce_dropshippromotion_items = _ecommerce_dropshippromotion_items(sequelize, DataTypes);
  var ecommerce_dropshippromotion_types = _ecommerce_dropshippromotion_types(sequelize, DataTypes);
  var ecommerce_dropshippromotiontype = _ecommerce_dropshippromotiontype(sequelize, DataTypes);
  var ecommerce_memberdiscount = _ecommerce_memberdiscount(sequelize, DataTypes);
  var ecommerce_membershippingaddress = _ecommerce_membershippingaddress(sequelize, DataTypes);
  var ecommerce_payment = _ecommerce_payment(sequelize, DataTypes);
  var ecommerce_paymenttype = _ecommerce_paymenttype(sequelize, DataTypes);
  var ecommerce_productclass = _ecommerce_productclass(sequelize, DataTypes);
  var ecommerce_shippingbox = _ecommerce_shippingbox(sequelize, DataTypes);
  var ecommerce_t2ppresult = _ecommerce_t2ppresult(sequelize, DataTypes);
  var event_attendee = _event_attendee(sequelize, DataTypes);
  var event_attendee_members = _event_attendee_members(sequelize, DataTypes);
  var event_event = _event_event(sequelize, DataTypes);
  var event_preattendee = _event_preattendee(sequelize, DataTypes);
  var event_preattendee_members = _event_preattendee_members(sequelize, DataTypes);
  var hold_expire = _hold_expire(sequelize, DataTypes);
  var jet_bookmark = _jet_bookmark(sequelize, DataTypes);
  var jet_pinnedapplication = _jet_pinnedapplication(sequelize, DataTypes);
  var matrix_memberactive = _matrix_memberactive(sequelize, DataTypes);
  var member_achievement = _member_achievement(sequelize, DataTypes);
  var member_clientvattype = _member_clientvattype(sequelize, DataTypes);
  var member_memberdocumentcheckup = _member_memberdocumentcheckup(sequelize, DataTypes);
  var member_membergroup = _member_membergroup(sequelize, DataTypes);
  var member_memberlogs = _member_memberlogs(sequelize, DataTypes);
  var member_memberm = _member_memberm(sequelize, DataTypes);
  var member_membersocialtagconfig = _member_membersocialtagconfig(sequelize, DataTypes);
  var member_memberstatusstack = _member_memberstatusstack(sequelize, DataTypes);
  var member_terminate = _member_terminate(sequelize, DataTypes);
  var oauth2_provider_accesstoken = _oauth2_provider_accesstoken(sequelize, DataTypes);
  var oauth2_provider_application = _oauth2_provider_application(sequelize, DataTypes);
  var oauth2_provider_grant = _oauth2_provider_grant(sequelize, DataTypes);
  var oauth2_provider_refreshtoken = _oauth2_provider_refreshtoken(sequelize, DataTypes);
  var province = _province(sequelize, DataTypes);
  var system_lineagent = _system_lineagent(sequelize, DataTypes);
  var system_log_logtravelcredit = _system_log_logtravelcredit(sequelize, DataTypes);
  var system_log_logtravelpoint = _system_log_logtravelpoint(sequelize, DataTypes);
  var tbl_activity_en = _tbl_activity_en(sequelize, DataTypes);
  var tbl_activity_th = _tbl_activity_th(sequelize, DataTypes);
  var trip_travelpointstack = _trip_travelpointstack(sequelize, DataTypes);
  var trip_travelpointusestatement = _trip_travelpointusestatement(sequelize, DataTypes);
  var trip_trip = _trip_trip(sequelize, DataTypes);
  var trip_tripapplication = _trip_tripapplication(sequelize, DataTypes);

  ecommerce_dropshippromotion_items.belongsTo(ecommerce_dropshippromotion, { as: "dropshippromotion", foreignKey: "dropshippromotion_id"});
  ecommerce_dropshippromotion.hasMany(ecommerce_dropshippromotion_items, { as: "ecommerce_dropshippromotion_items", foreignKey: "dropshippromotion_id"});
  ecommerce_dropshippromotion_types.belongsTo(ecommerce_dropshippromotion, { as: "dropshippromotion", foreignKey: "dropshippromotion_id"});
  ecommerce_dropshippromotion.hasMany(ecommerce_dropshippromotion_types, { as: "ecommerce_dropshippromotion_types", foreignKey: "dropshippromotion_id"});
  ecommerce_dropshippromotion_types.belongsTo(ecommerce_dropshippromotiontype, { as: "dropshippromotiontype", foreignKey: "dropshippromotiontype_id"});
  ecommerce_dropshippromotiontype.hasMany(ecommerce_dropshippromotion_types, { as: "ecommerce_dropshippromotion_types", foreignKey: "dropshippromotiontype_id"});
  ecommerce_dropshippromotion_items.belongsTo(ecommerce_productclass, { as: "productclass", foreignKey: "productclass_id"});
  ecommerce_productclass.hasMany(ecommerce_dropshippromotion_items, { as: "ecommerce_dropshippromotion_items", foreignKey: "productclass_id"});

  return {
    account_useraccount,
    accounting_paymenttype,
    accounting_statementstate,
    accounting_statementtype,
    ali_ac,
    ali_adjust,
    ali_aging,
    ali_ambonus,
    ali_apv,
    ali_around,
    ali_asaled,
    ali_asaleh,
    ali_atoasaled,
    ali_atoasaleh,
    ali_autocals,
    ali_bank,
    ali_bank_new,
    ali_bank_old,
    ali_bbuy,
    ali_bc,
    ali_binary_newpoint,
    ali_binary_report,
    ali_bm,
    ali_bm1,
    ali_bm2,
    ali_bmbonus,
    ali_bmnew,
    ali_bround,
    ali_calc_poschange,
    ali_calc_poschange1,
    ali_calc_poschange2,
    ali_calc_poschange3,
    ali_cc,
    ali_checkdownline,
    ali_checkdownline_sp,
    ali_cm,
    ali_cmbonus,
    ali_cmbonus_b,
    ali_commission,
    ali_commission_b,
    ali_cpv,
    ali_cron,
    ali_cronjob,
    ali_cround,
    ali_cround1,
    ali_dc,
    ali_dm,
    ali_dmbonus,
    ali_dpv,
    ali_dround,
    ali_eatoship,
    ali_ec,
    ali_ecom,
    ali_ecommision,
    ali_ed,
    ali_em,
    ali_embonus,
    ali_epv,
    ali_esaled,
    ali_esaleh,
    ali_ewallet,
    ali_ewallet_commission,
    ali_ewallet_tranfer,
    ali_ewalletd,
    ali_expdate,
    ali_fc,
    ali_fm,
    ali_fmbonus,
    ali_fpv,
    ali_fround,
    ali_global,
    ali_gmbonus,
    ali_holddesc,
    ali_holdhead,
    ali_import_stock_d,
    ali_import_stock_h,
    ali_invent,
    ali_inventory_order,
    ali_isaled,
    ali_isaleh,
    ali_istockd,
    ali_istockh,
    ali_location_base,
    ali_log,
    ali_log_change,
    ali_log_eatoship,
    ali_log_ecom,
    ali_log_ewallet,
    ali_log_hpv,
    ali_log_ipay,
    ali_log_ktc,
    ali_log_voucher,
    ali_log_wallet,
    ali_lr_def,
    ali_mc,
    ali_member,
    ali_member_favorite,
    ali_member_show,
    ali_member_tmp,
    ali_mm,
    ali_mmbonus,
    ali_mmobile,
    ali_mmodesc,
    ali_moround,
    ali_mpv,
    ali_msaled,
    ali_msaleh,
    ali_my_pv,
    ali_nation,
    ali_news,
    ali_ombonus,
    ali_oon,
    ali_ostockd,
    ali_ostockh,
    ali_package_invcode,
    ali_pairbonus,
    ali_payment,
    ali_payment_branch,
    ali_payment_type,
    ali_pc,
    ali_pmbonus,
    ali_poschange,
    ali_position,
    ali_position2,
    ali_pospv,
    ali_pospv_tmp,
    ali_ppv,
    ali_product,
    ali_product_invcode,
    ali_product_invent,
    ali_product_invent_log,
    ali_product_invent_log_r,
    ali_product_package,
    ali_product_package1,
    ali_productgroup,
    ali_promotion,
    ali_pround,
    ali_rc,
    ali_rccode,
    ali_report_cron,
    ali_report_member,
    ali_report_point,
    ali_report_point1,
    ali_report_promotion,
    ali_report_promotion1,
    ali_rsaled,
    ali_rsaleh,
    ali_rscode,
    ali_sale_ewallet,
    ali_sale_hold,
    ali_sc,
    ali_sending,
    ali_smbonus,
    ali_sms,
    ali_special_point,
    ali_special_point_group,
    ali_sponsor,
    ali_status,
    ali_stdesc,
    ali_stockcard_e,
    ali_stockcard_r,
    ali_stockcard_s,
    ali_stockeep,
    ali_stocks,
    ali_structure_binary,
    ali_structure_binary_rcode,
    ali_structure_sponsor,
    ali_subuser,
    ali_supplier,
    ali_syscomm,
    ali_tax,
    ali_temp_ad,
    ali_tmbonus,
    ali_tmbonus1,
    ali_transfer_ewallet_confirm,
    ali_transferewallet_h,
    ali_transfersale_d,
    ali_transfersale_h,
    ali_trip_bonus,
    ali_trip_pv,
    ali_tround,
    ali_tsaled,
    ali_tsaleh,
    ali_upv,
    ali_user,
    ali_voucher,
    ali_webcfg,
    amphur,
    amphur_postcode,
    ao_collect_sku_2023,
    ao_detail_with_pro,
    ao_detail_with_pro_100,
    ao_promotion_logs,
    ao_promotion_product,
    ao_promotionpv_logs,
    ao_promotionpv_product,
    ao_promotionpv_remain,
    ao_redeem_reward_logs,
    ao_trip_with_sku,
    assetsdw_data,
    auth_group,
    auth_group_permissions,
    auth_permission,
    auth_user,
    auth_user_groups,
    auth_user_user_permissions,
    branch_branchgoodsexportitem,
    branch_branchgoodsexportstatement,
    branch_branchgoodsimportitem,
    branch_branchgoodsimportstatement,
    branch_branchgoodssnapremainingitem,
    branch_branchgoodssnapremainingstatement,
    branch_historicalbranchgoodsexportstatement,
    branch_historicalbranchgoodsimportstatement,
    branch_historicalbranchgoodssnapremainingstatement,
    branch_stockadjustitem,
    branch_stockadjuststatement,
    chkbmbonus,
    district,
    django_admin_log,
    django_celery_beat_clockedschedule,
    django_celery_beat_crontabschedule,
    django_celery_beat_intervalschedule,
    django_celery_beat_periodictask,
    django_celery_beat_periodictasks,
    django_celery_beat_solarschedule,
    django_celery_results_taskresult,
    django_content_type,
    django_migrations,
    django_session,
    ecommerce_dropshippromotion,
    ecommerce_dropshippromotion_items,
    ecommerce_dropshippromotion_types,
    ecommerce_dropshippromotiontype,
    ecommerce_memberdiscount,
    ecommerce_membershippingaddress,
    ecommerce_payment,
    ecommerce_paymenttype,
    ecommerce_productclass,
    ecommerce_shippingbox,
    ecommerce_t2ppresult,
    event_attendee,
    event_attendee_members,
    event_event,
    event_preattendee,
    event_preattendee_members,
    hold_expire,
    jet_bookmark,
    jet_pinnedapplication,
    matrix_memberactive,
    member_achievement,
    member_clientvattype,
    member_memberdocumentcheckup,
    member_membergroup,
    member_memberlogs,
    member_memberm,
    member_membersocialtagconfig,
    member_memberstatusstack,
    member_terminate,
    oauth2_provider_accesstoken,
    oauth2_provider_application,
    oauth2_provider_grant,
    oauth2_provider_refreshtoken,
    province,
    system_lineagent,
    system_log_logtravelcredit,
    system_log_logtravelpoint,
    tbl_activity_en,
    tbl_activity_th,
    trip_travelpointstack,
    trip_travelpointusestatement,
    trip_trip,
    trip_tripapplication,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
