// ref. https://blog.bitsrc.io/using-non-ssr-friendly-components-with-next-js-916f38e8992c
import React from 'react';
import dynamic from 'next/dynamic';
const NonSSRWrapper = (props: React.PropsWithChildren<{}>) => (
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
