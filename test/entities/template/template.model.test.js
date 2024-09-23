const mongoose = require('mongoose');
const Template = require('../../../src/entities/template/template.model');

describe('Template Model', () => {
  it('debería lanzar un error si falta un campo requerido', () => {
    const template = new Template({
      // Falta TemplateID, NombrePlantilla
      TypographyNom: 'Arial',
      URLTypography: 'https://fonts.google.com',
      ColorPrim: '#FFFFFF',
      ColorSec: '#000000',
      ColorLetra: '#333333'
    });

    const error = template.validateSync();
    expect(error.errors.TemplateID).toBeDefined();
    expect(error.errors.NombrePlantilla).toBeDefined();
  });

  it('debería guardar un template válido sin errores', async () => {
    const template = new Template({
      TemplateID: 'template123',
      NombrePlantilla: 'Plantilla Boda',
      TypographyNom: 'Arial',
      URLTypography: 'https://fonts.google.com',
      ColorPrim: '#FFFFFF',
      ColorSec: '#000000',
      ColorLetra: '#333333'
    });

    const savedTemplate = await template.save();
    expect(savedTemplate.TemplateID).toBe('template123');
    expect(savedTemplate.NombrePlantilla).toBe('Plantilla Boda');
    expect(savedTemplate.ColorPrim).toBe('#FFFFFF');
  });
});
