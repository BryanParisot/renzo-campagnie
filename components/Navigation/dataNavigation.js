import { FormattedMessage } from "react-intl";

export const data_navigation = [
  {
    id: 0,
    title: <FormattedMessage id="navigation.header.home" />,
    path: "/",
  },
  {
    id: 5,
    title: <FormattedMessage id="navigation.header.voitures" />,
    path: "/voiture",
  },
  {
    id: 3,
    title: <FormattedMessage id="navigation.header.utilitaire" />,
    path: "/utilitaires",
  },
  {
    id: 7,
    title: <FormattedMessage id="navigation.header.poid_lourd" />,
    path: "/poid-lourd",
  },
  {
    id: 2,
    title: <FormattedMessage id="navigation.header.engin_chantier" />,
    path: "/engin-chantier",
  },
  {
    id: 4,
    title: <FormattedMessage id="navigation.header.engin_agricole" />,
    path: "/engin-agricole",
  },
  {
    id: 6,
    title: <FormattedMessage id="navigation.header.benne" />,
    path: "/benne",
  },
  {
    id: 8,
    title: <FormattedMessage id="navigation.header.remorque" />,
    path: "/remorques",
  },
  {
    id: 9,
    title: <FormattedMessage id="navigation.header.semi_remorque" />,
    path: "/semi-remorque",
  },
];

export const legal_navigation = [
  {
    id: 1,
    title: <FormattedMessage id="navigation.header.legal.mentions" />,
    path: "/mentions-legales",
  },
  {
    id: 2,
    title: <FormattedMessage id="navigation.header.legal.conditons" />,
    path: "/conditions-generales",
  },
  {
    id: 3,
    title: <FormattedMessage id="navigation.header.legal.protected" />,
    path: "/protection-des-donnees",
  },
];
