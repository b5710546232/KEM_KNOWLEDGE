import ProvinceJSON from '../../assets/json/province.json'

export const getProvince = (province_name)=>{
  let province = ProvinceJSON.find((current_province)=>current_province.lowername===province_name)
  return province.name
}
