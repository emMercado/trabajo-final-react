const base = process.env.REACT_APP_API_BASE_URL;

const routes = {
    path1: () => `${base}/`,
    path2: () => `${base}/places`,
    path3: (id) => `${base}/places/${id}`,
    sample: () => `${base}/places`
}

export default routes;