import React, { DOM } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Helmet from 'react-helmet';

const AboutPage = () => (
  React.createElement(Container, {},
    React.createElement(Header, { as: 'h2' }, 'About this blog'),
    DOM.p(null,
      `Chambray occupy disrupt meh portland bicycle rights.
      Pitchfork echo park pork belly cornhole tacos 8-bit.
      Vice ennui copper mug YOLO hoodie fam. Health goth pickled echo park drinking vinegar,
      kombucha before they sold out scenester craft beer listicle lomo ramps fixie vape master
      cleanse hoodie. Meggings beard activated charcoal, offal four loko tote bag synth hammock
      gentrify etsy enamel pin sustainable. Chicharrones cronut fashion axe hell of distillery
      hashtag. Bushwick hell of beard ennui cred church-key.`
    ),
    React.createElement(Helmet, {
      title: 'About this blog'
    })
  )
);

export default AboutPage;
