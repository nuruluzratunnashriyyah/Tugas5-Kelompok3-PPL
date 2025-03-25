import type { HttpContext } from '@adonisjs/core/http'
import Novel from '#models/novel'

export default class NovelsController {
  // 1. Lihat daftar novel
  public async index({ response }: HttpContext) {
    const novels = await Novel.all()
    return response.json(novels)
  }

  // 2. Tambah novel
  public async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'year', 'author', 'genre', 'pages', 'rating', 'summary'])
    const novel = await Novel.create(data)
    return response.status(201).json(novel)
  }

  // 3. Lihat detail novel berdasarkan judul
  public async show({ params, response }: HttpContext) {
    const novel = await Novel.query().where('title', 'LIKE', `%${params.title}%`)
    return novel.length > 0 ? response.json(novel) : response.status(404).json({ message: 'Novel tidak ditemukan' })
  }

  // 4. Update novel berdasarkan judul
  public async update({ params, request, response }: HttpContext) {
    const novel = await Novel.findBy('title', params.title)
    if (!novel) return response.status(404).json({ message: 'Novel not found' })
    
    novel.merge(request.only(['year', 'author', 'genre', 'pages', 'rating', 'summary']))
    await novel.save()
    
    return response.json({ message: 'Novel updated successfully', novel })
  }

  // 5. Hapus novel berdasarkan judul
  public async destroy({ params, response }: HttpContext) {
    const novel = await Novel.findBy('title', params.title)
    if (!novel) return response.status(404).json({ message: 'Novel not found' })

    await novel.delete()
    return response.json({ message: 'Novel deleted successfully' })
  }

  // 6. Lihat novel dengan rating tertinggi
  public async highestRated({ response }: HttpContext) {
    const novel = await Novel.query().orderBy('rating', 'desc').first()
    return novel ? response.json(novel) : response.status(404).json({ message: 'No novels found' })
  }
}
