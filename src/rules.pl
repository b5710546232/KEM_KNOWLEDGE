:- load_files(disease_class, [encoding(utf8)]).
:- load_files(district_class, [encoding(utf8)]).
:- load_files(ecosystem_class, [encoding(utf8)]).
:- load_files(insect_class, [encoding(utf8)]).
:- load_files(pest_class, [encoding(utf8)]).
:- load_files(province_fact, [encoding(utf8)]).
:- load_files(province_region_fact, [encoding(utf8)]).
:- load_files(ricetype_class, [encoding(utf8)]).
:- load_files(ricetype_price, [encoding(utf8)]).
:- load_files(ricetype_suitable_with_soilgroup, [encoding(utf8)]).
:- load_files(rice_class, [encoding(utf8)]).
:- load_files(rice_ecosystem, [encoding(utf8)]).
:- load_files(rice_fact, [encoding(utf8)]).
:- load_files(rice_growth, [encoding(utf8)]).
:- load_files(rice_properties, [encoding(utf8)]).
:- load_files(rice_region_fact, [encoding(utf8)]).
:- load_files(rice_tolerance_with_disease, [encoding(utf8)]).
:- load_files(rice_tolerance_with_insect, [encoding(utf8)]).
:- load_files(rice_vulnerable_to_disease, [encoding(utf8)]).
:- load_files(rice_vulnerable_to_insect, [encoding(utf8)]).
:- load_files(soilgroup_class, [encoding(utf8)]).
:- load_files(sub_district_class, [encoding(utf8)]).
:- module(rulse, []).

simpleRule(Rice,RiceType,SubDis,Disrict,Province,Price,SellPlace,Season) :-
  province_region_fact:has_region(Province,Region),
  rice_growth:grows_well_in(Rice,SubDis,Season),
  province_region_fact:has_region(Pro,Region),
  sub_district_class:is_part_of(SubDis,Disrict),
  district_class:is_part_of(Disrict,Province),
  ricetype_price:sold_for(RiceType,SpecialCase,Pro,Humidity,Price).
