import { Db, Collection } from 'mongodb';



export interface EDistrictData {
  "@context": string[];
  id: string;
  type: string[];
  credentialSubject: {
    [certificateType: string]: {
      [key: string]: any;
    };
  };
  issuer: string;
  proof: {
    type: string;
    verificationMethod: string;
    cryptosuite: string;
    proofPurpose: string;
    proofValue: string;
  };
  [key: string]: any;
}



export const getEDistrictDataCollection = (db: Db): Collection<EDistrictData> => {
  return db.collection<EDistrictData>('eDistrictData');
};



