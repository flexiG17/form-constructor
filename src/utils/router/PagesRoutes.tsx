import {RoutesEnum} from "./RoutesEnum";
import StartPage from "../../pages/start/StartPage";
import CompanyProfilePage from "../../pages/companyProfile/CompanyProfilePage";
import MainPage from "../../pages/main/MainPage";
import CreateFormPage from "../../pages/createForm/CreateFormPage";
import AnswerPage from "../../pages/answer/AnswerPage";
import UserProfilePage from "../../pages/userProfile/UserProfilePage";
import SettingPage from "../../pages/setting/SettingPage";

export const PagesRoutes = [
    {
        path: RoutesEnum.START_PAGE,
        element: <StartPage/>
    },
    {
        path: RoutesEnum.DEFAULT_PATH,
        element: <>ops</>
    },
    {
        path: RoutesEnum.COMPANY_PROFILE_PATH,
        element: <CompanyProfilePage/>
    },
    {
        path: RoutesEnum.COMPANY_MAIN_PATH,
        element: <MainPage/>
    },
    {
        path: RoutesEnum.CREATE_FORM_PATH,
        element: <CreateFormPage/>
    },
    {
        path: RoutesEnum.ANSWER_PATH,
        element: <AnswerPage/>
    },
    {
        path: RoutesEnum.USER_PROFILE_PATH,
        element: <UserProfilePage/>
    },
    {
        path: RoutesEnum.SETTING_PATH,
        element: <SettingPage/>
    },
]