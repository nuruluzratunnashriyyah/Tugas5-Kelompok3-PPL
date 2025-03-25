/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const NovelsController = () => import('#controllers/novels_controller')

// 1. Lihat daftar novel
router.get('/novels', 'NovelsController.index')

// 2. Tambah novel
router.post('/novels', 'NovelsController.store')

// 3. Lihat detail novel berdasarkan judul
router.get('/novels/:title', 'NovelsController.show')

// 4. Update novel berdasarkan judul
router.put('/novels/:title', 'NovelsController.update')

// 5. Hapus novel berdasarkan judul
router.delete('/novels/:title', 'NovelsController.destroy')

// 6. Lihat novel dengan rating tertinggi
router.get('/novels/highest-rated', 'NovelsController.highestRated')

