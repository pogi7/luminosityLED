import client from "./connect";

export const getServerSideProps = (async () => {
    await client.connect();
    const response = await client.findOne();
    const pageData = await response.json();
    await client.close();

    return { 
        props: {
            todos: pageData
        }
    }
})