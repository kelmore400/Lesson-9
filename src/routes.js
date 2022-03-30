import { MainLayout } from './layouts/main';
import { MarkList } from './components/MarksList';
import { NameForm } from './components/NameForm/NameForm';
import { SupportForm } from './components/SupportForm/SupportForm';

export const routes = [
  {
    path: "*",
    component: MainLayout,
    routes: [
      {
        path: "/support",
        component: SupportForm
      },
      {
        path: "/name",
        component: NameForm
      },
      {
        path: "/",
        component: MarkList
      }
    ]
  }
];