"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { recentPostFooter, kategori } from "@/app/types";
import Link from "next/link";
import Image from "next/image";
import { htmlToText } from "html-to-text";

function Footer() {
  const [cleanDeskripsi, setCleanDeskripsi] = useState<recentPostFooter[]>([]);
  const [kategoriList, setKategoriList] = useState<kategori[]>([]);
  const [showAllTags, setShowAllTags] = useState(false);
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const getBerita = async () => {
      try {
        const res = await axios.get(`${baseurl}/berita`);
        const data: recentPostFooter[] = res.data.data;

        const cleaned = data.map((item: recentPostFooter) => ({
          ...item,
          deskripsi: htmlToText(item.deskripsi, { wordwrap: false }),
        }));

        setCleanDeskripsi(cleaned);
      } catch (error) {
        console.error("Error fetching berita:", error);
      }
    };

    const getKategori = async () => {
      try {
        const res = await axios.get(`${baseurl}/kategori`);
        const data: kategori[] = res.data.data;
        setKategoriList(data);
      } catch (error) {
        console.error("Error fetching kategori:", error);
      }
    };

    getBerita();
    getKategori();
  }, []);

  return (
    <footer id="footer" className="dark">
      <div className="container">
        <div className="footer-widgets-wrap row clearfix">
          {/* Recent Posts */}
          <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
            <div className="widget clearfix">
              <h4 className="mb-3 mb-sm-4">Recent Posts</h4>
              <div className="posts-sm row col-mb-30" id="post-list-footer">
                {cleanDeskripsi.slice(0, 3).map((item) => (
                  <div key={item.id} className="entry col-12">
                    <div className="grid-inner row align-items-center g-0">
                      <div className="col-auto">
                        <div className="entry-image">
                          <Link href="">
                            <Image
                              src={item.cover}
                              alt={item.judul}
                              width={300}
                              height={300} />
                          </Link>
                        </div>
                      </div>
                      <div className="col ps-3">
                        <div className="entry-title">
                          <h4 className="fw-semibold">
                            <a href="" className="text-white">
                              {item.judul}
                            </a>
                          </h4>
                        </div>
                        <div className="entry-meta">
                          <ul>
                            <li>
                              <i className="icon-time"></i>
                              <a href="#">{item.waktu_publish}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Tag Cloud */}
          <div className="col-lg-2 col-sm-6 mb-5 mb-lg-0">
            {/* <h4 className="mb-3 mb-sm-4">Tag Cloud</h4> */}
            <h4 className="mb-3 mb-sm-4">Tag Cloud</h4>
            <div className="tagcloud">
              {kategoriList.slice(0, showAllTags ? kategoriList.length : 8).map((kategori) => (
                <Link
                  key={kategori.id_kategori}
                  href={`/kategori/${kategori.slug}`}
                  className="inline-block px-3 py-1.5 text-sm text-white bg-neutral-700 rounded-full hover:bg-neutral-800 transition-colors mb-1"
                >
                  {kategori.nama}
                </Link>
              ))}
              {kategoriList.length > 8 && (
                <button
                  type="button"
                  className="px-0 py-0 text-[10px] font-semibold text-neutral-400 bg-transparent hover:underline"
                  style={{ transform: "scale(0.85)", border: "none", boxShadow: "none" }}
                  onClick={() => setShowAllTags(!showAllTags)}
                >
                  {showAllTags ? "Show Less \u25B2" : "Show More \u25BC"}
                </button>
              )}
            </div>
          </div>

          {/* Blogroll */}
          <div className="col-lg-3 col-sm-6 mb-5 mb-sm-0">
            <div className="widget widget_links clearfix">
              <h4 className="mb-3 mb-sm-4">Blogroll</h4>
              <ul>
                <li><a href="https://codex.wordpress.org/">Documentation</a></li>
                <li><a href="https://wordpress.org/support/forum/requests-and-feedback">Feedback</a></li>
                <li><a href="https://wordpress.org/extend/plugins/">Plugins</a></li>
                <li><a href="https://wordpress.org/support/">Support Forums</a></li>
                <li><a href="https://wordpress.org/extend/themes/">Themes</a></li>
                <li><a href="https://wordpress.org/news/">Canvas Blog</a></li>
                <li><a href="https://planet.wordpress.org/">Customer Reviews</a></li>
                <li><a href="https://planet.wordpress.org/">Get Licence</a></li>
              </ul>
            </div>
          </div>

          {/* Download App Section */}
          <div className="col-lg-3 col-sm-6 mb-0">
            <div className="widget widget_links clearfix">
              <h4 className="mb-3 mb-sm-4">Download in Mobile</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus beatae esse iure est, quam libero!
              </p>
              <a
                href="#"
                className="button button-light text-dark w-100 text-center bg-white nott ls0 button-rounded button-xlarge ms-0"
              >
                <i className="icon-apple"></i>App Store
              </a>
              <a
                href="#"
                className="button button-light text-dark w-100 text-center bg-white nott ls0 button-rounded button-xlarge ms-0"
              >
                <i className="icon-googleplay"></i>Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div id="copyrights">
        <div className="container clearfix">
          <div className="row justify-content-center">
            <div className="col-md-6 align-self-center">
              Copyrights &copy; 2020 All Rights Reserved by Canvas Inc
              <br />
              <div className="copyright-links">
                <a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a>
              </div>
            </div>

            <div className="col-md-6 align-self-center">
              <div className="copyrights-menu float-end copyright-links m-0 clearfix">
                <a href="#">Home</a>/<a href="#">About</a>/<a href="#">Features</a>/<a href="#">Portfolio</a>/<a href="#">FAQs</a>/<a href="#">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
