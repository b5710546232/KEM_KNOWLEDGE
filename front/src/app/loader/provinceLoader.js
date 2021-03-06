import ProvinceJSON from '../../assets/json/province.json'
import DistrictJSON from '../../assets/json/district.json'
import SubDistrictJSON from '../../assets/json/sub_district.json'

export const getProvince = (province_name,des)=>{
  console.log(des,province_name);
  let province = ProvinceJSON.find((current_province)=>current_province.lowername===province_name)
  if (!province) return province_name
  return province.name
}
export const getDistinct = (district,des) =>{
  console.log(des,district);
  let district_d = DistrictJSON.find((current_district)=>current_district.district_lower==district)
  if (!district_d) return district
  return district_d.district
}
export const getSubDistrict = (subdistrict,des) =>{
  console.log(des,subdistrict);
  let sub_district = SubDistrictJSON.find((current_sub_district)=>current_sub_district.sub_district_lower==subdistrict)
  if (!sub_district) return subdistrict
  return sub_district.sub_district
}
export const getListOfDistrict = (province) =>{
  if (province=="") return []
  return DistrictJSON.filter((district_obj)=>district_obj.province_lower==province)
}
export const getListOfSubDistrict = (district,province) =>{
  if (district==""||province=="") return []
  return SubDistrictJSON.filter((sub_district)=>sub_district.province_lower==province&&sub_district.district_lower==district)
}
