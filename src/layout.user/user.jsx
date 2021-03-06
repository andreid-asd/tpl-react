const debug = require("debug")("@asd14/tpl-react:UserLayout")

import React from "react"
import PropTypes from "prop-types"
import { useAuth } from "@asd14/react-hooks"
import { Heading } from "@asd14/gruvbox-ui"

import { BaseLayout } from "layout.base/base"

import css from "./user.module.css"

const UserLayout = ({ children }) => {
  const { name } = useAuth()

  return (
    <BaseLayout>
      <div className={css["user-layout"]}>
        <Heading>{`Hello ${name}!`}</Heading>
        {children}
      </div>
    </BaseLayout>
  )
}

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { UserLayout }
