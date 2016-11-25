import ProvinceJSON from '../../assets/json/province.json'
import DistrictJSON from '../../assets/json/district.json'
import SubDistrictJSON from '../../assets/json/sub_district.json'

export const getProvince = (province_name)=>{
  let province = ProvinceJSON.find((current_province)=>current_province.lowername===province_name)
  return province.name
}
export const getDistinct = (district) =>{
  district = DistrictJSON.find((current_district)=>current_district.district_lower==district)
  return district.district
}
export const getSubDistrict = (subdistrict) =>{
  console.log('ssss',sub_district);
  let sub_district = SubDistrictJSON.find((current_sub_district)=>current_sub_district.sub_district_lower==subdistrict)
  console.log(sub_district);
  return sub_district.sub_district
}
export const getListOfDistrict = (province) =>{
  if (province=="") return DistrictJSON
  return DistrictJSON.filter((district_obj)=>district_obj.province_lower==province)
}
export const getListOfSubDistrict = (district,province) =>{
  if (district=="") return SubDistrictJSON
  return SubDistrictJSON.filter((sub_district)=>sub_district.province_lower==province&&sub_district.district_lower==district)
}
