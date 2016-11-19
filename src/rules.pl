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
expertRule(Rice,RiceType,SubDis,Disrict,Province,Price,SellPlace,Humidity,Season,PhotoPeriod,Thrips,Mealybug,BrownPlantHopper,WhiteBackedPlantHopper,ZigzagLeafHopper,
GreenRiceLeafHopper,RiceHispa,StemBorer,CutWorm,RiceEarCuttingCaterpilla,RiceLeafFolder,RiceCaseWorm,RiceWhorlMaggot,RiceBlackBug,RiceGallMidge,RiceBug,
SeedlingRotInNurseyBox,SheathRot,SheathBlight,BacterialLeafBlight,GrassyStunt,FalseSmut,Bakanae,BacterialLeafStreak,NarrowBrownSpot,BrownSpot,RedStripe,LeafScald,RiceTungro,
OrangeLeaf,RiceRaggedStunt,DirtyPanicle,Akiochi,RootKnot,StemRot,GallDwarf,YellowDwarf,RiceBlast) :-
  province_region_fact:has_region(Province,Region),
  rice_growth:grows_well_in(Rice,SubDis,Season),
  % rice_properties:has_properties(Rice,RiceType,Yield,PhotoPeriod,SpecialCase1),
  rice_properties:has_properties(Rice,RiceType,_,PhotoPeriod,_), % fixed for yeild be any thing.
  province_region_fact:has_region(SellPlace,Region),
  sub_district_class:is_part_of(SubDis,Disrict),
  district_class:is_part_of(Disrict,Province),
  % pest_class:is_subclass_of(P,pest),
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
  % ricetype_price:sold_for(RiceType,SpecialCase2,SellPlace,Humidity,Price). old version of frank
  ricetype_price:sold_for(RiceType,_,SellPlace,Humidity,Price). % fix for SppecialCase 2 can be any thing.
%listTrav([H|T]) :- process(H), listTrav(T).

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
  wellGrownRice(Rice, RiceType, SubDistrict, _, PhotoPeriod, HarvestingSeason, CurrentMonth)
  ,
  not( isSpecialRice(Rice) )
  ,
  bestPriceRiceNormal(RiceType, BestRicePrice)
  ,
  ricetype_price:sold_for(RiceType, _, SellToProvince, Humidity, BestRicePrice).

% Recursive case: Special Rice AKA. rice with SpecialCase = Rice
bestPriceRice(Rice, RiceType, SellToProvince, SubDistrict, Humidity, BestRicePrice, PhotoPeriod, HarvestingSeason, CurrentMonth) :-
  wellGrownRice(Rice, RiceType, SubDistrict,_, PhotoPeriod, HarvestingSeason, CurrentMonth)
  ,
  isSpecialRice(Rice)
  ,
  bestPriceRiceSpecial(Rice, RiceType, BestRicePrice)
  ,
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
