import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { School } from "../../typings";

const query = groq`
  *[_type == "school"] {
    ...,
    technologies[]->
  }
`;

type Data = {
  education: School[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const education: School[] = await sanityClient.fetch(query);

  res.status(200).json({ education });
}