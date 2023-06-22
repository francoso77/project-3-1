import { useEffect, useRef, useState } from 'react';
import { mapData } from '../../api/map-data';
import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        /*const data = await fetch(
          'http://localhost:1337/api/pages/?filters[slug]=landing-page&populate=deep',
        );
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);*/
        await fetch('dados.json').then((r) => {
          r.json().then((data) => {
            setData(data[0]);
            console.log(data);
          });
        });
      }
      catch (e) {
        setData(undefined);
      }
    };

    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  /*if (data && !data.slug) {
    return <Loading />;
  }
  const { menu, sections, footerHtml } = data;
  const { links, text, link, srcImg } = menu;*/

  //return <Base {...mockBase} />;
  return (
    <Base {...mockBase}>

    </Base>
  );
}
export default Home;
