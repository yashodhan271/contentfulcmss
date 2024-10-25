import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { convertCommonTagToLabel } from '@/utils/functions';
import {truncateTitle } from "@/utils/functions";


interface ReducedTilesProps {
  data: any;
  type?: string;
  pressAndNews?: boolean;
}

const ReducedTiles: React.FC<ReducedTilesProps> = ({ data, type, pressAndNews }) => {

  return (
    <div className={styles.reducedTiles}>
      {data.map((tile: any, i: Number) => {
        let commonId, commonLabel
        const { title, internalName, slug } = tile.fields;
        commonId = tile.tags?.find((tag: any) => tag.sys.id.includes('common'));
        if (commonId) {
          commonLabel = convertCommonTagToLabel(commonId?.sys.id);
        }
        const truncatedTitle = truncateTitle(title)
        switch (type) {
          case 'Collections':
            return (
              <Link key={`reduced_tile_${i}`} href={`/products/${tile?.fields?.common?.fields?.slug}/${slug}`}>
                <div key={`reduced_tile_${i}`} className={styles.tile}>
                  <p className={styles.type}>{type}</p>
                  <h5 className={styles.title}>{truncatedTitle}</h5>
                </div>
              </Link>
            )
          case 'Commons':
            return (
              <Link key={`reduced_tile_${i}`} href={`/products/${slug}`}>
                <div key={`reduced_tile_${i}`} className={styles.tile}>
                  <p className={styles.type}>{type}</p>
                  <h5 className={styles.title}>{truncatedTitle}</h5>
                </div>
              </Link>
            )
          case 'News':
          case 'Press releases':
            const newsAndPressType = tile.fields.news ? 'News' : 'Press Releases';
            const date = new Date(tile.fields.publishedDate);
            const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-US', options);

            return (
              <Link key={`reduced_tile_${i}`} href={`/about-us/press-and-news/${slug}`}>
                <div key={`reduced_tile_${i}`} className={styles.tile}>
                  <p className={styles.type}>{newsAndPressType}</p>
                  <h5 className={styles.title}>{truncatedTitle}</h5>
                  <p className={styles.bottomLabel}>{formattedDate}</p>
                </div>
              </Link>
            )
          case 'Newsletters':
            return (
              <a href={`${tile?.fields?.file?.url}`} target="_blank">
                <div key={`reduced_tile_${i}`} className={styles.tile}>
                  <p className={styles.type}>{type}</p>
                  <h5 className={styles.title}>{truncatedTitle}</h5>
                  <Image className={styles.icon} src="/icons/pdf.svg" alt="pdf-icon" width={64} height={64} />
                  {commonLabel && <p className={styles.bottomLabel}>{commonLabel}</p>}
                </div>
              </a>
            )
          case 'Insights':
            return (
              <a href={`${tile?.fields?.youtubeUrl}`}>
                <div key={`reduced_tile_${i}`} className={styles.tile}>
                  <p className={styles.type}>{"Our Insights"}</p>
                  <h5 className={styles.title}>{truncatedTitle}</h5>
                  <Image className={styles.icon} src="/icons/play-button-blue.svg" alt="pdf-icon" width={64} height={64} />
                  {commonLabel && <p className={styles.bottomLabel}>{commonLabel}</p>}
                </div>
              </a>
            )
        }

      })}
    </div>
  );
};

export default ReducedTiles;