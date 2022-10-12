import { ReactElement } from 'react';
import { Story, Meta } from '@storybook/react';
import { CardsColorful } from '../cards-colorful';
import { FooterExtended } from '../footer-extended';
import { FeatureList } from '../feature-list';
import { Header } from '../header';
import { HeroIllustration } from '../hero-illustration';
import { HeroGradient } from '../hero-gradient';
import { HeroMarketplace } from '../hero-marketplace';
import { HeroVideo } from '../hero-video';
import { InfoList } from '../info-list';
import { MarketplaceSearch } from '../marketplace-search';
import {
  dummyCardsColorful,
  dummyFeatureList,
  dummyHeroGradient,
  dummyHeroIllustration,
  dummyHeroMarketplace,
  dummyHeroVideo,
  dummyInfoList,
  dummyMarketplaceSearch,
} from '../../helpers/dummy';

export default {
  title: 'Products/Envelop',
  argTypes: {
    page: {
      table: {
        disable: true,
      },
      control: false,
    },
  },
} as Meta;

const Template: Story = ({ page }): ReactElement => {
  const pages: Record<string, ReactElement> = {
    '/': (
      <>
        <HeroGradient {...dummyHeroGradient} />
        <FeatureList {...dummyFeatureList} />
        <HeroVideo {...dummyHeroVideo} />
        <HeroIllustration {...dummyHeroIllustration} />
        <HeroMarketplace {...dummyHeroMarketplace} />
        <InfoList {...dummyInfoList} />
      </>
    ),
    '/marketplace': (
      <>
        <CardsColorful {...dummyCardsColorful} />
        <MarketplaceSearch {...dummyMarketplaceSearch} />
      </>
    ),
  };

  return (
    <>
      <Header accentColor="#ED2E7E" activeLink="/open-source" themeSwitch />
      {pages[page]}
      <FooterExtended />
    </>
  );
};

export const Home = Template.bind({});
Home.args = {
  page: '/',
};

export const Marketplace = Template.bind({});
Marketplace.args = {
  page: '/marketplace',
};
