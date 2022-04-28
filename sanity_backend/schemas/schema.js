// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import testimonials from "./testimonials";
import contact from "./contact";
import skills from "./skills"
import works from "./works";
import workExperience from "./workExperience";
import experiences from "./experiences";
import abouts from "./abouts";
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    testimonials,
    abouts,
    contact,
    experiences,
    skills,
    works,
    workExperience,
  ]),
})
