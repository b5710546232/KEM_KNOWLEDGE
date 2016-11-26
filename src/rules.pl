- module(rules, []).
% has_property(riceName,riceType,yield,photoPeriod,specialCase).
simpleRule(Rice,RiceType,SubDis,Disrict,Province,Price,SellPlace,Humidity,Season,Yield,PhotoPeroid) :-
  province_region_fact:has_region(Province,Region),
  rice_growth:grows_well_in(Rice,SubDis,Season),
  province_region_fact:has_region(SellPlace,Region),
  sub_district_class:is_part_of(SubDis,Disrict),
  district_class:is_part_of(Disrict,Province),
  ricetype_price:sold_for(RiceType,_,SellPlace,Humidity,Price),
  rice_properties:has_properties(Rice,RiceType,Yield,PhotoPeroid,_).


%Work first, smart later!
expertRule(Rice,RiceType,SubDis,Disrict,Province,Price,SellPlace,Humidity,Season,PhotoPeriod,Thrips,Mealybug,
BrownPlantHopper,WhiteBackedPlantHopper,ZigzagLeafHopper,GreenRiceLeafHopper,RiceHispa,StemBorer,CutWorm,
RiceEarCuttingCaterpilla,RiceLeafFolder,RiceCaseWorm,RiceWhorlMaggot,RiceBlackBug,RiceGallMidge,RiceBug,
SeedlingRotInNurseyBox,SheathRot,SheathBlight,BacterialLeafBlight,GrassyStunt,FalseSmut,Bakanae,BacterialLeafStreak,
NarrowBrownSpot,BrownSpot,RedStripe,LeafScald,RiceTungro,OrangeLeaf,RiceRaggedStunt,DirtyPanicle,Akiochi,RootKnot,
StemRot,GallDwarf,YellowDwarf,RiceBlast) :-
  rice_class:is_instance_of(Rice,rice),
  province_region_fact:has_region(Province,Region),
  rice_growth:grows_well_in(Rice,SubDis,Season),
  rice_properties:has_properties(Rice,RiceType,_,PhotoPeriod,_),
  province_region_fact:has_region(SellPlace,Region),
  sub_district_class:is_part_of(SubDis,Disrict),
  district_class:is_part_of(Disrict,Province),
  valnerable_pest_to(Rice,thrips,Thrips),
  valnerable_pest_to(Rice,mealybug,Mealybug),
  valnerable_pest_to(Rice,brownPlantHopper,BrownPlantHopper),
  valnerable_pest_to(Rice,whiteBackedPlantHopper,WhiteBackedPlantHopper),
  valnerable_pest_to(Rice,zigzagLeafHopper,ZigzagLeafHopper),
  valnerable_pest_to(Rice,greenRiceLeafHopper,GreenRiceLeafHopper),
  valnerable_pest_to(Rice,riceHispa,RiceHispa),
  valnerable_pest_to(Rice,stemBorer,StemBorer),
  valnerable_pest_to(Rice,cutWorm,CutWorm),
  valnerable_pest_to(Rice,riceEarCuttingCaterpilla,RiceEarCuttingCaterpilla),
  valnerable_pest_to(Rice,riceLeafFolder,RiceLeafFolder),
  valnerable_pest_to(Rice,riceCaseWorm,RiceCaseWorm),
  valnerable_pest_to(Rice,riceWhorlMaggot,RiceWhorlMaggot),
  valnerable_pest_to(Rice,riceBlackBug,RiceBlackBug),
  valnerable_pest_to(Rice,riceGallMidge,RiceGallMidge),
  valnerable_pest_to(Rice,riceBug,RiceBug),
  valnerable_disease_to(Rice,seedlingRotInNurseyBox,SeedlingRotInNurseyBox),
  valnerable_disease_to(Rice,sheathRot,SheathRot),
  valnerable_disease_to(Rice,sheathBlight,SheathBlight),
  valnerable_disease_to(Rice,bacterialLeafBlight,BacterialLeafBlight),
  valnerable_disease_to(Rice,grassyStunt,GrassyStunt),
  valnerable_disease_to(Rice,falseSmut,FalseSmut),
  valnerable_disease_to(Rice,bakanae,Bakanae),
  valnerable_disease_to(Rice,bacterialLeafStreak,BacterialLeafStreak),
  valnerable_disease_to(Rice,narrowBrownSpot,NarrowBrownSpot),
  valnerable_disease_to(Rice,brownSpot,BrownSpot),
  valnerable_disease_to(Rice,redStripe,RedStripe),
  valnerable_disease_to(Rice,leafScald,LeafScald),
  valnerable_disease_to(Rice,riceTungro,RiceTungro),
  valnerable_disease_to(Rice,orangeLeaf,OrangeLeaf),
  valnerable_disease_to(Rice,riceRaggedStunt,RiceRaggedStunt),
  valnerable_disease_to(Rice,dirtyPanicle,DirtyPanicle),
  valnerable_disease_to(Rice,akiochi,Akiochi),
  valnerable_disease_to(Rice,rootKnot,RootKnot),
  valnerable_disease_to(Rice,stemRot,StemRot),
  valnerable_disease_to(Rice,gallDwarf,GallDwarf),
  valnerable_disease_to(Rice,yellowDwarf,YellowDwarf),
  valnerable_disease_to(Rice,riceBlast,RiceBlast),
  ricetype_price:sold_for(RiceType,_,SellPlace,Humidity,Price).


% Core Rule#1.
isInSeason(CurrentMonth) :-
  CurrentMonth >= 5,
  CurrentMonth =< 10.

% Core Rule#2.
% As of 20-26 Oct 2016 from www.brrd.in.th
suitableWithCurrentPestSituation(Rice, Region) :-
  ( ( Region = central ; Region = north ; Region = northeast )
  -> (
  ( rice_tolerance_with_insect:tolerance_with(Rice, brownPlantHopper) ; not( rice_vulnerable_to_insect:vulnerable_to(Rice, brownPlantHopper) ) )
  ,
  ( rice_tolerance_with_disease:tolerance_with(Rice, riceBlast) ; not(rice_vulnerable_to_disease:vulnerable_to(Rice, riceBlast) ) )
  )
  ; (
  Region = south
  ->
  ( rice_tolerance_with_disease:tolerance_with(Rice, riceBlast) ; not(rice_vulnerable_to_disease:vulnerable_to(Rice, riceBlast) ) )
  )
  ).

valnerable_disease_to(X,Y,Z) :-
  (rice_vulnerable_to_disease:vulnerable_to(X,Y) -> Z ="true";
  not(rice_vulnerable_to_disease:vulnerable_to(X,Y))-> Z ="false").

valnerable_pest_to(X,Y,Z) :-
  (rice_vulnerable_to_insect:vulnerable_to(X,Y) -> Z ="true";
  not(rice_vulnerable_to_insect:vulnerable_to(X,Y))-> Z ="false").
  % Recursive case: [not in-season] only rices that are non-sensitive are allowed
  wellGrownRice(Rice, RiceType, SubDistrict, District, PhotoPeriod, HarvestingSeason, CurrentMonth) :-
  sub_district_class:is_part_of(SubDistrict, District),
  not( isInSeason(CurrentMonth) ),=(PhotoPeriod,nonSensitivity), =(HarvestingSeason,doubleCrop),
  rice_growth:grows_well_in(Rice, SubDistrict, HarvestingSeason)
  ,
  rice_properties:has_properties(Rice, RiceType, _, PhotoPeriod, _).

% Recursive case: [in-season] allowed rices can be either sensitive or non-sensitive
wellGrownRice(Rice, RiceType, SubDistrict, District, PhotoPeriod, HarvestingSeason, CurrentMonth) :-
  sub_district_class:is_part_of(SubDistrict, District),
  isInSeason(CurrentMonth),
  rice_growth:grows_well_in(Rice, SubDistrict, HarvestingSeason),
  rice_properties:has_properties(Rice, RiceType, _, PhotoPeriod, _).

% Inferred rice based on well-grown ability in a specific sub-district and find the best place to sell for each rice.

/* Check Unification of Rice and SpecialRice in ricetype_price:sold_for (Always true ffs...)
true (when) Rice = SpecialRice, sold_for has special case  then find at least one solution of the unification
false (when) Rice != SpecialRice, sold for special case is none
*/
isSpecialRice(Rice) :-
  unify_with_occurs_check(
  ricetype_price:sold_for(RiceType, Rice, SellToProvince, Humid, Price), ricetype_price:sold_for(RiceType, SpecialRice, SellToProvince, Humid, Price)
  ),
  findall(SpecialRice, ricetype_price:sold_for(RiceType, SpecialRice, SellToProvince, Humid, Price), SpecialRiceList),
  not( length(SpecialRiceList,0) ).

%  Recursive case: Normal Rice AKA. rice with SpecialCase = none
bestPriceRice(Rice, RiceType, SellToProvince, SubDistrict, Humidity, BestRicePrice, PhotoPeriod, HarvestingSeason, CurrentMonth) :-
  wellGrownRice(Rice, RiceType, SubDistrict, _, PhotoPeriod, HarvestingSeason, CurrentMonth),
  not( isSpecialRice(Rice) ),
  bestPriceRiceNormal(RiceType, BestRicePrice),
  ricetype_price:sold_for(RiceType, _, SellToProvince, Humidity, BestRicePrice).

% Recursive case: Special Rice AKA. rice with SpecialCase = Rice
bestPriceRice(Rice, RiceType, SellToProvince, SubDistrict, Humidity, BestRicePrice, PhotoPeriod, HarvestingSeason, CurrentMonth) :-
  wellGrownRice(Rice, RiceType, SubDistrict,_, PhotoPeriod, HarvestingSeason, CurrentMonth),
  isSpecialRice(Rice),
  bestPriceRiceSpecial(Rice, RiceType, BestRicePrice),
  ricetype_price:sold_for(RiceType, Rice, SellToProvince, Humidity, BestRicePrice).

% Rule of Special rice. Find its highest selling price.
bestPriceRiceSpecial(Rice, RiceType, BestRicePrice) :-
  %writeln('Special case'),
  findall(RicePrice, ricetype_price:sold_for(RiceType, Rice, _, _, RicePrice), RicePriceList),
  sort(RicePriceList, SortedRicePriceList), last(SortedRicePriceList, BestRicePrice).

% Rule of Non-special rice. Find its highest selling price.
bestPriceRiceNormal(RiceType, BestRicePrice) :-
  %writeln('Not special case'),
  findall(RicePrice, ricetype_price:sold_for(RiceType, none, _, _, RicePrice), RicePriceList),
  sort(RicePriceList, SortedRicePriceList), last(SortedRicePriceList, BestRicePrice).

bestYieldRice(Rice, RiceType, SubDistrict, BestYield, PhotoPeriod, HarvestingSeason, CurrentMonth) :-
  wellGrownRice(Rice, RiceType, SubDistrict, _, PhotoPeriod, HarvestingSeason, CurrentMonth),
  findall(RiceYield, rice_properties:has_properties(Rice, RiceType, RiceYield, PhotoPeriod, SpecialCaseYield), YieldList ),
  sort(YieldList, SortedYieldList), last(SortedYieldList, BestYield),
  rice_properties:has_properties(Rice, RiceType, BestYield, PhotoPeriod, SpecialCaseYield).
