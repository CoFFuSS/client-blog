import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import { ParamsLocale } from '@/types/common';

import styles from './page.module.scss';

export default function Privacy({ params: { locale } }: ParamsLocale) {
  unstable_setRequestLocale(locale);
  const translation = useTranslations('privacy');

  return (
    <main>
      <section className={styles.upper}>
        <h1>{translation('title')}</h1>
        <p>{translation('info')}</p>
      </section>

      <article className={styles.content}>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
          sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis
          parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque
          egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi
          tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat
          blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse
          ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor
          neque vitae tempus quam.
        </p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris
          in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas
          congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla
          facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet
          enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum
          suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras
          semper auctor neque vitae tempus quam. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
          enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in
          tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris
          vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida
          rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus
          ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu
          lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
          nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris
          in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas
          congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla
          facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet
          enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum
          suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras
          semper auctor neque vitae tempus quam. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
          enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in
          tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris
          vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida
          rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus
          ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu
          lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
          nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
        </p>
      </article>
    </main>
  );
}
