"use client"
import React, {useEffect, useState, useContext } from 'react';

//INTERNAL IMPORT
import { CrowdFundingContext } from '../../Context/Lock';
import { Hero, Card, PopUp} from "../../Components";

const page = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllcampaign] = useState();
  const [usercampaign, setUsercampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const userCampaignsData = getUserCampaigns();

    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllcampaign(allData);
      setUsercampaign(userData);
    };
  }, []);

  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);

  return (
    <>
    <Hero titleData={titleData} createCampaign={createCampaign} />

    <Card
      title="All Listed Campaign"
      allcampaign={allcampaign}
      setOpenModel={setOpenModel}
      setDonate={setDonateCampaign}
    />
    <Card 
      title="Your Created campaign"
      allcampaign={usercampaign}
      setOpenModel={setOpenModel}
      setDonate={setDonateCampaign}
    />

    {openModel && (
      <PopUp 
        setOpenModel={setOpenModel}
        getDonations={getDonations}
        donate={donateCampaign}
        donateFunction={donate}
      />
    )}
    </>
  );
};

export default page;
