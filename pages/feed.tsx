import { GetStaticProps } from "next"
import React, { useEffect } from "react"
import { generateFeedFile } from "../lib/generate-rss"

const Atom: React.FC = () => {
  useEffect(() => {
    window.location.href = "/feed.json"
  }, [])

  return null
}

// update static rss files
export const getStaticProps: GetStaticProps = async () => {
  generateFeedFile()
  return {
    props: {}
  }
}
export default Atom