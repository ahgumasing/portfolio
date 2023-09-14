import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import App from './App.vue';
import Grid from './components/Grid.vue';
import Page from './components/Page.vue';
import Teaser from './components/Teaser.vue';
import Feature from './components/Feature.vue';
import Image from './components/Image.vue';
import Text from './components/Text.vue';
import ImageLink from './components/ImageLink.vue';
import Article from './components/Article.vue';
import FlipImage from './components/FlipImage.vue';
import Card from './components/Card.vue';
import Spacer from './components/Spacer.vue';
import Badge from './components/Badge.vue';

import './css/tailwind.css';

const app = createApp(App);

app.use(StoryblokVue, {
    accessToken: 'Hzyfkil1VgIQEkryTQCCRAtt',
    use: [apiPlugin],
    apiOptions: {
        region: '',
    },
});

app.component('Grid', Grid);
app.component('Page', Page);
app.component('Teaser', Teaser);
app.component('Feature', Feature);
app.component('Image', Image);
app.component('Text', Text);
app.component('ImageLink', ImageLink);
app.component('Article', Article);
app.component('FlipImage', FlipImage);
app.component('Card', Card);
app.component('Spacer', Spacer);
app.component('Badge', Badge);

app.mount('#app');
