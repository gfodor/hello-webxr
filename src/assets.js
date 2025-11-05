import * as THREE from 'three';

export default {
  // hall
  foxr_tex: { url: 'foxr.png', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  hall_model: { url: 'hall.glb' },
  generic_controller_model: { url: 'generic_controller.glb' },
  lightmap_tex: { url: 'lightmap.jpg', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  controller_tex: { url: 'controller.basis' },
  doorfx_tex: { url: 'doorfx.basis', options: { wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping }},
  sky_tex: { url: 'sky.png', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  clouds_tex: { url: 'clouds.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  teleport_model: { url: 'teleport.glb' },
  beam_tex: { url: 'beamfx.png' },
  glow_tex: { url: 'glow.basis', options: { colorSpace: THREE.SRGBColorSpace} },
  newsticker_tex: { url: 'newsticker.jpg', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  mozillamr_tex: { url: 'mozillamr.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  zoomicon_tex: { url: 'zoomicon.png', options: { colorSpace: THREE.SRGBColorSpace } },

  // panoramas
  panoballfx_tex: { url: 'ballfx.basis', options: { wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping } },

  stereopanoL: { url: 'stereopanoL.basis', options: { colorSpace: THREE.SRGBColorSpace }},
  stereopanoR: { url: 'stereopanoR.basis', options: { colorSpace: THREE.SRGBColorSpace }},
  pano1small: { url: 'stereopano_small.basis', options: {colorSpace: THREE.SRGBColorSpace} },

  pano2: { url: 'tigerturtle.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  pano3: { url: 'lakebyllesby.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  pano4: { url: 'haldezollern.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  pano5: { url: 'zapporthorn.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  pano6: { url: 'thuringen.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  pano2small: { url: 'tigerturtle_small.basis', options: {colorSpace: THREE.SRGBColorSpace} },
  pano3small: { url: 'lakebyllesby_small.basis', options: {colorSpace: THREE.SRGBColorSpace} },
  pano4small: { url: 'haldezollern_small.basis', options: {colorSpace: THREE.SRGBColorSpace} },
  pano5small: { url: 'zapporthorn_small.basis', options: {colorSpace: THREE.SRGBColorSpace} },
  pano6small: { url: 'thuringen_small.basis', options: {colorSpace: THREE.SRGBColorSpace} },

  // graffiti
  spray_model: { url: 'spray.glb' },
  spray_tex: { url: 'spray.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },

  // vertigo
  vertigo_model: { url: 'vertigo.glb' },
  vertigo_door_lm_tex: { url: 'vertigo_door_lm.jpg', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  vertigo_lm_tex: { url: 'vertigo_lm.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  checkboard_tex: { url: 'checkboard.basis', options: { wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping, repeat: [4, 4] } },

  // sound
  sound_model: { url: 'sound.glb' },
  sound_door_model: { url: 'sound_door.glb' },
  sound_shadow_tex: { url: 'sound_shadow.png' },
  sound_door_lm_tex: { url: 'sound_door_lm.jpg', options: { wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping} },
  grid_tex: { url: 'grid.png', options: { wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping, repeat: [20, 20] } },

  // photogrammetry object
  pg_floor_tex: { url: 'travertine2.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false, wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping} },
  pg_floor_lm_tex: { url: 'pg_floor_lm.jpg', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  pg_door_lm_tex: { url: 'pg_door_lm.jpg', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  pg_object_tex: { url: 'angel.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  pg_object_model: { url: 'angel.min.glb' }, // TODO: try draco version, angel.min.gl
  pg_bg_tex: { url: 'pg_bg.jpg', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  pg_flare_tex: { url: 'flare.jpg', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  pg_panel_tex: { url: 'panel.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },

  // paintings
  painting_seurat_tex: { url: 'paintings/seurat.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  painting_sorolla_tex: { url: 'paintings/sorolla.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  painting_bosch_tex: { url: 'paintings/bosch.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  painting_degas_tex: { url: 'paintings/degas.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },
  painting_rembrandt_tex: { url: 'paintings/rembrandt.basis', options: { colorSpace: THREE.SRGBColorSpace, flipY: false} },

  // sounds
  birds_snd: { url: 'ogg/birds.ogg' },
  chopin_snd: { url: 'ogg/chopin.ogg' },
  forest_snd: { url: 'ogg/forest.ogg' },
  wind_snd: { url: 'ogg/wind.ogg' },
  teleport_a_snd: { url: 'ogg/teleport_a.ogg' },
  teleport_b_snd: { url: 'ogg/teleport_b.ogg' }
};

