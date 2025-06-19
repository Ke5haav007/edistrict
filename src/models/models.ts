import { Db, Collection } from 'mongodb';



export interface EDistrictData {
  "@context": string[];
  id: string;
  type: string[];
  credentialSubject: {
    casteCertificate: {
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
  [key: string]: any; // Optional fallback to accept any extra fields
}



export const getEDistrictDataCollection = (db: Db): Collection<EDistrictData> => {
  return db.collection<EDistrictData>('eDistrictData');
};



