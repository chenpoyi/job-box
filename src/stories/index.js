import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Navbar from '../components/Navbar';

storiesOf("Navbar", module)
.add("Base", ()=> <Navbar />)