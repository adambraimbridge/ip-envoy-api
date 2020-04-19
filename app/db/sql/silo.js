const { connect } = require("../connect");

async function list({ entityType, journeyId }) {
  const knex = connect(entityType);
  let query = `
    SELECT * from core.silo
    LEFT JOIN core."siloType"
    ON silo."siloTypeId" = "siloType"."siloTypeId"
  `;
  if (journeyId) {
    query += `
      WHERE "journeyId" = ${journeyId}
    `;
  }
  const res = await knex.raw(query);
  return res.rows;
}

module.exports = {
  list
};
