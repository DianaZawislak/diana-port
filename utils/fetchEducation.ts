import { EducationType } from "../typings";

export const fetchEducation = async () => {
  const res = await fetch(
    
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducation`
  );

  const data = await res.json();
  const school: EducationType[] = data.school;

  console.log("fetching", school);
 

  return school;
};
