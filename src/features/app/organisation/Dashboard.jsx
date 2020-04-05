import React, { useContext, useState } from "react";
import FullHeightLayoutNoFooter from  "../../../components/app/full-height-layout-no-footer"
import Reactions from "../../../components/app/reactions";
import OpenRequest from "../../../components/app/open-request";
import ReqProvider, { ReqContext } from "../../../context/mock-requests";
import RepositoryImpl from "../../../repository/repository";
import {OrgNameContext, OrgIdContext} from "../../../context/organisation_context"
import {Helper} from "../../../repository/model/helper";
import {Skill} from "../../../repository/model/helprequest";

const repository = new RepositoryImpl();

// eslint-disable-next-line no-unused-vars

const mockData = [
    {
        title: "Helft Tragen und Transportieren",
        timeLast: "5 Tage",
        reqHelpers: 30,
        confirmed: 14,
        denied: 14,
        open: 12
    },
    {
        title: "Blutspender gesucht",
        timeLast: "2 Tage",
        reqHelpers: -1,
        confirmed: 140,
        denied: 0,
        open: 0
    }
];

export default function Dashboard() {
    const org_id = useContext(OrgIdContext);
    const org_name = useContext(OrgNameContext);
    const [data, setData] = useState([]);
    React.useEffect(() => {
        const fetchOrgData = async () => {
            const data =  await repository.getHelpRequests(org_id);
            setData(data);
        };
        fetchOrgData();
    }, []);
    return (
        <ReqProvider>
            <FullHeightLayoutNoFooter>
                <div>
                    <h1 className="question font-dm-sans-h1">
                        Hi  {org_name}, das gibt's Neues.
                    </h1>
                </div>

                <div>
                    <Reactions reactNum={12} />
                </div>
                {data.map(el => {
                    return <OpenRequest {...el} />;
                })}
            </FullHeightLayoutNoFooter>
        </ReqProvider>
    );

}
/*{
    <div>
                  {mockData.map(el => {
                    return <OpenRequest {...el} />;
                  })}
                </div>
}*/
