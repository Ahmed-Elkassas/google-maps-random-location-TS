import { Company } from './Company';
import { User } from './User';
import { CustomMaps } from "./CustomMap";


const map = new CustomMaps('maps')

const randomUser = new User();
const randomComany = new Company()

map.addUserMarker(randomUser);
map.addCompanyMarker(randomComany)