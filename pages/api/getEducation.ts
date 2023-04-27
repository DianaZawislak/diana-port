// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { EducationType } from "../../typings";

const query = groq`
  *[_type == "education"] 
`;

type Data = {
  school: EducationType[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const school: EducationType[] = await sanityClient.fetch(query);

  res.status(200).json({ school });
}
