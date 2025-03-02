export interface DiseaseData {
    diseases:Array<{
        name: string;
        probability: number;
        description: string;
        causes?: string[];
        precautions?: string[];
    }>;
    medications:{
        otc: string[];
        prescribed: string[];
    };
    dietplan:{
        recommended: string[];
        avoid: string[];
    };
    workouts:string[];

}