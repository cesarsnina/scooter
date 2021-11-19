const { Station } = require("../relations");
const {sequelize} = require("../index");

describe("Station class", () => {
  beforeAll(async () => {
    await sequelize.sync({
      force: true,
    });
  });

  test("station1 properties", async () => {
    const station1 = await Station.create({
      cityName: 'DC',
    });
    expect(station1.id).toBe(1);
  });
});
