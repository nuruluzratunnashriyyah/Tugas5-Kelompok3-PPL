/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
// const NovelsController = () => import('#controllers/Http/novels_controller')
// import NovelsController from '#controllers/Http/novels_controller'


router.get('/', async () => {
    return { message: 'Hello, world!' }
  })

// // 1. Lihat daftar novel
// router.get('/novels', 'NovelsController.index')

// // 2. Tambah novel
// router.post('/novels', 'NovelsController.store')

// // 3. Lihat detail novel berdasarkan judul
// router.get('/novels/:title', 'NovelsController.show')

// // 4. Update novel berdasarkan judul
// router.put('/novels/:title', 'NovelsController.update')

// // 5. Hapus novel berdasarkan judul
// router.delete('/novels/:title', 'NovelsController.destroy')

// // 6. Lihat novel dengan rating tertinggi
// router.get('/novels/highest-rated', 'NovelsController.highestRated')
import NovelsController from '#controllers/Http/novels_controller'

router.get('/novels', (ctx) => new NovelsController().index(ctx))
router.post('/novels', (ctx) => new NovelsController().store(ctx))
router.get('/novels/:title', (ctx) => new NovelsController().show(ctx))
router.put('/novels/:title', (ctx) => new NovelsController().update(ctx))
router.delete('/novels/:title', (ctx) => new NovelsController().destroy(ctx))
router.get('/novels/highest-rated', (ctx) => new NovelsController().highestRated(ctx))


