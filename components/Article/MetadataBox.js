import * as React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { DateParser, Heading } from "@pubsweet/ui";
import { MetadataBoxElement, Bubble } from "./elements";

const MetadataBox = ({ metadata }) => {
  const submission = JSON.parse(metadata.submission);
  return (
    <MetadataBoxElement>
      <Heading level={3}>About this paper</Heading>
      <ul>
        <li>
          Author: {submission.name} ({submission.affiliation})
        </li>
        <li>
          Published:{" "}
          <DateParser timestamp={metadata.publishedDate} dateFormat="DD/M/YYYY">
            {(timestamp, timeAgo) => (
              <span>
                {timestamp} ({timeAgo} ago)
              </span>
            )}
          </DateParser>
        </li>
        <li>
          Filename: {metadata.files[0].filename} (
          {Math.floor(metadata.files[0].size / 1024)} kb)
        </li>
        <li>Short ID: {metadata.shortId}</li>
        <li>
          Methods:{" "}
          {submission.methods.map((method, index) => (
            <Bubble key={`m${index}`}>
              <Link href={`/method/${method}`}>{method}</Link>
            </Bubble>
          ))}
        </li>
        <li>
          Packages:{" "}
          {submission.packages.map((backage, index) => (
            <Bubble key={`p${index}`} blue>
              <Link href={`/package/${backage}`}>{backage}</Link>
            </Bubble>
          ))}
        </li>
      </ul>
    </MetadataBoxElement>
  );
};

export default MetadataBox;

MetadataBox.propTypes = {
  metadata: PropTypes.object,
};
