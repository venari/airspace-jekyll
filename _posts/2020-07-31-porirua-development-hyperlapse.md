---
author: Leigh
layout: post
---

This has been a fun project to work on with [Porirua Development][porirua-development] over the last 16 months, capturing the enormous progress that has taken place at Castor Crescent in Porirua, transforming it from a field into 53 new homes.

By flying a predefined path multiple times, and then applying some fairly detailed post-processing, we are able to merge the video captures and photos from different dates, to help illustrate the changes to a site over several months or years.

This project involved 8 site visits capturing video and 30+ hours editing and post-processing, and further refining and optimising method.


[porirua-development]: https://poriruadevelopment.co.nz/

## Before and After
These two photospheres illustrate the changes on the site over 9 months. You can drag the one on the left to move the view.

<div class="row">
  <div id="viewerBefore"></div>
  <div id="viewerAfter"></div>

  <style>
    #viewerBefore {
      width: 49%;
      height: 500px;
      float:left;
    }
    #viewerAfter {
      width: 49%;
      height: 500px;
      float:right;
    }
  </style>

  <script>

    var viewerBefore = new PhotoSphereViewer({
      container: 'viewerBefore',
      panorama: '{{ site.baseurl }}/img/DJI_0986.JPG',
      time_anim: 1500,
      default_long: -0.15,
      default_lat: -0.9,
      caption: 'October 2019.',
      navbar: false,
      mousewheel: true,
      anim_speed: '0.5rpm'
    });

    var viewerAfter = new PhotoSphereViewer({
      container: 'viewerAfter',
      panorama: '{{ site.baseurl }}/img/DJI_0402.JPG',
      time_anim: false,
      default_long: -0.28,
      default_lat: -0.9,
      caption: 'July 2020',
      navbar: false,
      mousewheel: false,
      mousemove: false,
    });

    viewerBefore.on('position-updated', (e, position) => {
      viewerAfter.rotate(
      {
        latitude: position.args[0].latitude,// - 0.03,
        longitude: position.args[0].longitude - 0.13
      });
    });

    viewerBefore.on('zoom-updated', (e, zoomLevel) => {
      viewerAfter.zoom(zoomLevel.args[0]);
    });

  </script>
</div>
## Hyperlapse video
This is the first of two videos produced for Porirua Development. The second will be released in the near future.

<div class="row">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ZAoD7ShRC7s?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Find out more about the project on Porirua Development's <a href="https://www.facebook.com/PoriruaDevelopment/" target="_blank">Facebook Page</a>.

To find out more about our aerial photography, 3D data capture and geospatial software development services, visit our <a href="{{ site.baseurl }}/aerial-photography">Aerial Photography Services</a> page.