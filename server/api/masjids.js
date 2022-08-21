import { createRouter, useBase } from 'h3';

const router = createRouter();

const masjids = [{
    name: "Rwanda Muslim Community",
    slug: "rmc"
},
{
    name: "Masjid Darusalam",
    slug: "kicukiro-gasharu"
},
]

router.get('/', () => masjids);

export default useBase('/api/masjids', router.handler);