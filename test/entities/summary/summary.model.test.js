const mongoose = require('mongoose');
const Summary = require('../../../src/entities/summary/summary.model');

describe('Summary Model', () => {

  it('debería lanzar un error si falta un campo requerido', () => {
    const summary = new Summary({
      SummaryID: 'summary123',
      // Falta TotalInvitados, TotalConfirmado, EventID
    });

    const error = summary.validateSync();
    expect(error.errors.TotalInvitados).toBeDefined();
    expect(error.errors.TotalConfirmado).toBeDefined();
    expect(error.errors.EventID).toBeDefined();
  });

  it('debería guardar un resumen válido sin errores', async () => {
    const summary = new Summary({
      SummaryID: 'summary123',
      TotalInvitados: 100,
      TotalConfirmado: 80,
      EventID: mongoose.Types.ObjectId()
    });

    const savedSummary = await summary.save();
    expect(savedSummary.SummaryID).toBe('summary123');
    expect(savedSummary.TotalInvitados).toBe(100);
    expect(savedSummary.TotalConfirmado).toBe(80);
  });
});
