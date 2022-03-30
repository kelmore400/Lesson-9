import { MainLayout } from './layouts/main';
import { MarkList } from './components/MarksList';
import { NameForm } from './components/NameForm/NameForm';
import { SupportForm } from './components/SupportForm/SupportForm';
import { Homework } from './homework/Homework';
import { ErrorPage } from './homework/ErrorPage';

export const routes = [
  {
    path: "*",
    component: MainLayout,
    routes: [
      {
        path: "/support",
        exact: true,
        component: () => <ErrorPage><SupportForm/></ErrorPage>
      },
      {
        path: "/name",
        component: NameForm
      },
      {
        path: "/homework",
        component: Homework
      },
      {
        path: "/",
        component: MarkList
      }
    ]
  }
];