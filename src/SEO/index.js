import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const SEO = ({ title, description, profileURL, type, image = "" }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" content={profileURL} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={profileURL} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  profileURL: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SEO;
