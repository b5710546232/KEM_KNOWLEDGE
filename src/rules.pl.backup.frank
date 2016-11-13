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

%Work first, smart later!
expertRule(Rice,RiceType,SubDis,Disrict,Province,Price,SellPlace,Humidity,Season,PhotoPeriod,Thrips,Mealybug,BrownPlantHopper,WhiteBackedPlantHopper,ZigzagLeafHopper,
GreenRiceLeafHopper,RiceHispa,StemBorer,CutWorm,RiceEarCuttingCaterpilla,RiceLeafFolder,RiceCaseWorm,RiceWhorlMaggot,RiceBlackBug,RiceGallMidge,RiceBug,
SeedlingRotInNurseyBox,SheathRot,SheathBlight,BacterialLeafBlight,GrassyStunt,FalseSmut,Bakanae,BacterialLeafStreak,NarrowBrownSpot,BrownSpot,RedStripe,LeafScald,RiceTungro,
OrangeLeaf,RiceRaggedStunt,DirtyPanicle,Akiochi,RootKnot,StemRot,GallDwarf,YellowDwarf,RiceBlast) :-
  province_region_fact:has_region(Province,Region),
  rice_growth:grows_well_in(Rice,SubDis,Season),
  rice_properties:has_properties(Rice,RiceType,Yield,PhotoPeriod,SpecialCase1),
  province_region_fact:has_region(Pro,Region),
  sub_district_class:is_part_of(SubDis,Disrict),
  district_class:is_part_of(Disrict,Province),
  pest_class:is_subclass_of(P,pest),
  %Amazingly bug.
  %(insect_class:is_instance_of(Pest,P) ; disease_class:is_instance_of(Pest,P)),
  %(P == insect -> (rice_vulnerable_to_insect:vulnerable_to(Rice,Pest) -> P==P; Pest='') ; (rice_vulnerable_to_disease:vulnerable_to(Rice,Pest) -> P==P; Pest='')),
  %(P == disease -> (rice_vulnerable_to_disease:vulnerable_to(Rice,Pest) -> Pest; P==P) ; P==P),

  %Such algo, much wow!
  not( (Thrips==1,rice_vulnerable_to_insect:vulnerable_to(Rice,thrips)) ),
  not( (Mealybug==1,rice_vulnerable_to_insect:vulnerable_to(Rice,mealybug)) ),
  not( (BrownPlantHopper==1,rice_vulnerable_to_insect:vulnerable_to(Rice,brownPlantHopper)) ),
  not( (WhiteBackedPlantHopper==1,rice_vulnerable_to_insect:vulnerable_to(Rice,whiteBackedPlantHopper)) ),
  not( (ZigzagLeafHopper==1,rice_vulnerable_to_insect:vulnerable_to(Rice,zigzagLeafHopper)) ),
  not( (GreenRiceLeafHopper==1,rice_vulnerable_to_insect:vulnerable_to(Rice,greenRiceLeafHopper)) ),
  not( (RiceHispa==1,rice_vulnerable_to_insect:vulnerable_to(Rice,riceHispa)) ),
  not( (StemBorer==1,rice_vulnerable_to_insect:vulnerable_to(Rice,stemBorer)) ),
  not( (CutWorm==1,rice_vulnerable_to_insect:vulnerable_to(Rice,cutWorm)) ),
  not( (RiceEarCuttingCaterpilla==1,rice_vulnerable_to_insect:vulnerable_to(Rice,riceEarCuttingCaterpilla)) ),
  not( (RiceLeafFolder==1,rice_vulnerable_to_insect:vulnerable_to(Rice,riceLeafFolder)) ),
  not( (RiceCaseWorm==1,rice_vulnerable_to_insect:vulnerable_to(Rice,riceCaseWorm)) ),
  not( (RiceWhorlMaggot==1,rice_vulnerable_to_insect:vulnerable_to(Rice,riceWhorlMaggot)) ),
  not( (RiceBlackBug==1,rice_vulnerable_to_insect:vulnerable_to(Rice,riceBlackBug)) ),
  not( (RiceGallMidge==1,rice_vulnerable_to_insect:vulnerable_to(Rice,riceGallMidge)) ),
  not( (RiceBug==1,rice_vulnerable_to_insect:vulnerable_to(Rice,riceBug)) ),

  %such Algo part #2
  not( (SeedlingRotInNurseyBox==1,rice_vulnerable_to_disease:vulnerable_to(Rice,seedlingRotInNurseyBox)) ),
  not( (SheathRot==1,rice_vulnerable_to_disease:vulnerable_to(Rice,sheathRot)) ),
  not( (SheathBlight==1,rice_vulnerable_to_disease:vulnerable_to(Rice,sheathBlight)) ),
  not( (BacterialLeafBlight==1,rice_vulnerable_to_disease:vulnerable_to(Rice,bacterialLeafBlight)) ),
  not( (GrassyStunt==1,rice_vulnerable_to_disease:vulnerable_to(Rice,grassyStunt)) ),
  not( (FalseSmut==1,rice_vulnerable_to_disease:vulnerable_to(Rice,falseSmut)) ),
  not( (Bakanae==1,rice_vulnerable_to_disease:vulnerable_to(Rice,bakanae)) ),
  not( (BacterialLeafStreak==1,rice_vulnerable_to_disease:vulnerable_to(Rice,bacterialLeafStreak)) ),
  not( (NarrowBrownSpot==1,rice_vulnerable_to_disease:vulnerable_to(Rice,narrowBrownSpot)) ),
  not( (BrownSpot==1,rice_vulnerable_to_disease:vulnerable_to(Rice,brownSpot)) ),
  not( (RedStripe==1,rice_vulnerable_to_disease:vulnerable_to(Rice,redStripe)) ),
  not( (LeafScald==1,rice_vulnerable_to_disease:vulnerable_to(Rice,leafScald)) ),
  not( (RiceTungro==1,rice_vulnerable_to_disease:vulnerable_to(Rice,riceTungro)) ),
  not( (OrangeLeaf==1,rice_vulnerable_to_disease:vulnerable_to(Rice,orangeLeaf)) ),
  not( (RiceRaggedStunt==1,rice_vulnerable_to_disease:vulnerable_to(Rice,riceRaggedStunt)) ),
  not( (DirtyPanicle==1,rice_vulnerable_to_disease:vulnerable_to(Rice,dirtyPanicle)) ),
  not( (Akiochi==1,rice_vulnerable_to_disease:vulnerable_to(Rice,akiochi)) ),
  not( (RootKnot==1,rice_vulnerable_to_disease:vulnerable_to(Rice,rootKnot)) ),
  not( (StemRot==1,rice_vulnerable_to_disease:vulnerable_to(Rice,stemRot)) ),
  not( (GallDwarf==1,rice_vulnerable_to_disease:vulnerable_to(Rice,gallDwarf)) ),
  not( (YellowDwarf==1,rice_vulnerable_to_disease:vulnerable_to(Rice,yellowDwarf)) ),
  not( (RiceBlast==1,rice_vulnerable_to_disease:vulnerable_to(Rice,riceBlast)) ),
  ricetype_price:sold_for(RiceType,SpecialCase2,Pro,Humidity,Price).
%listTrav([H|T]) :- process(H), listTrav(T).
