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

simpleRule(Rice,RiceType,SubDis,Disrict,Province,Price,SellPlace,Humidity,Season) :-
  province_region_fact:has_region(Province,Region),
  rice_growth:grows_well_in(Rice,SubDis,Season),
  province_region_fact:has_region(Pro,Region),
  sub_district_class:is_part_of(SubDis,Disrict),
  district_class:is_part_of(Disrict,Province),
  ricetype_price:sold_for(RiceType,SpecialCase,Pro,Humidity,Price).

expertRule(Rice,RiceType,SubDis,Disrict,Province,Price,SellPlace,Humidity,Season,PhotoPeriod,Pest) :-
  province_region_fact:has_region(Province,Region),
  rice_growth:grows_well_in(Rice,SubDis,Season),
  rice_properties:has_properties(Rice,RiceType,Yield,PhotoPeriod,SpecialCase1),
  province_region_fact:has_region(Pro,Region),
  sub_district_class:is_part_of(SubDis,Disrict),
  district_class:is_part_of(Disrict,Province),
  pest_class:is_subclass_of(P,pest),
  (insect_class:is_instance_of(Pest,P) ; disease_class:is_instance_of(Pest,P)),
  (P == insect -> (rice_vulnerable_to_insect:vulnerable_to(Rice,Pest) -> P==P; Pest='') ; (rice_vulnerable_to_disease:vulnerable_to(Rice,Pest) -> P==P; Pest='')),
  %(P == disease -> (rice_vulnerable_to_disease:vulnerable_to(Rice,Pest) -> Pest; P==P) ; P==P),
  ricetype_price:sold_for(RiceType,SpecialCase2,Pro,Humidity,Price).
%listTrav([H|T]) :- process(H), listTrav(T).
