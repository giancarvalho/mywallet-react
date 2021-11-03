import faker from "faker";

export default function createFakeEntries() {
    const type = ["expense", "income"];
    const userData = {
        amount: Number(faker.commerce.price()),
        description: faker.lorem.words(),
        type: type[Math.floor(Math.random() * type.length)],
    };

    return userData;
}
