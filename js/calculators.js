/**
 * Lógica matemática de las calculadoras y simuladores interactivos
 * para cada una de las 5 áreas del Hospital Arboledas.
 */

const CALCULATORS = {
  // 1. QUIRÓFANOS & UCI - Calculadora de Dosificación de Desinfectantes (historically col-alberca)
  alberca: {
    render: (containerId) => {
      const html = `
        <div class="calculator-card" style="border-color: var(--color-alberca)">
          <div class="calc-title-group" style="color: var(--color-alberca)">
            <svg class="calc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <h3 class="calc-title">Dosificación de Desinfectantes</h3>
          </div>
          <div class="calc-form">
            <div class="calc-input-group">
              <label class="calc-label">Superficie a Desinfectar</label>
              <div class="calc-input-container">
                <input type="number" id="alb-vol" class="calc-input" value="50" min="1" max="5000">
                <span class="calc-unit">m² de área quirúrgica</span>
              </div>
            </div>
            <div class="calc-input-group">
              <label class="calc-label">Desinfectante Clínico</label>
              <select id="alb-prod" class="calc-input calc-select">
                <option value="swipol">Swipol (Desinfección de Superficies)</option>
                <option value="peracetic">Peracetic (Esterilización y Alto Nivel)</option>
              </select>
            </div>
            <div class="calc-input-group">
              <label class="calc-label">Nivel de Carga Biológica</label>
              <select id="alb-state" class="calc-input calc-select">
                <option value="maint">Rutina / Sanitización Diaria (Baja Carga)</option>
                <option value="corrective">Quirófano Post-Cirugía / UCI (Alta Carga)</option>
              </select>
            </div>
            <div class="calc-result-box" style="border-color: rgba(0, 242, 254, 0.15)">
              <span class="calc-result-value" id="alb-res" style="color: var(--color-alberca)">25 ml</span>
              <span class="calc-result-label">Cantidad de Producto Swipe</span>
            </div>
          </div>
        </div>
      `;
      document.getElementById(containerId).innerHTML = html;

      // Event Listeners
      const update = () => {
        const area = parseFloat(document.getElementById("alb-vol").value) || 0;
        const prod = document.getElementById("alb-prod").value;
        const state = document.getElementById("alb-state").value;
        
        // Asumimos 100 ml de solución diluida por m² de superficie
        const solutionNeededMl = area * 100;
        let amount = 0;
        let unit = "ml";

        if (prod === "swipol") {
          // Swipol: Rutina 1:200 (5 ml/L), Alta carga 1:100 (10 ml/L)
          const dilutionRatio = state === "maint" ? 200 : 100;
          amount = solutionNeededMl / dilutionRatio;
        } else if (prod === "peracetic") {
          // Peracetic: Rutina 1:100 (10 ml/L), Alta carga 1:50 (20 ml/L)
          const dilutionRatio = state === "maint" ? 100 : 50;
          amount = solutionNeededMl / dilutionRatio;
        }

        // Formatear salida
        let output = "";
        if (amount >= 1000) {
          output = `${(amount / 1000).toFixed(2)} L`;
        } else {
          output = `${Math.round(amount)} ml`;
        }

        document.getElementById("alb-res").innerText = output;
      };

      document.getElementById("alb-vol").addEventListener("input", update);
      document.getElementById("alb-prod").addEventListener("change", update);
      document.getElementById("alb-state").addEventListener("change", update);
      update();
    }
  },

  // 2. LAVANDERÍA CLÍNICA - Carga de Lavandería Clínica (historically col-spa)
  spa: {
    render: (containerId) => {
      const html = `
        <div class="calculator-card" style="border-color: var(--color-spa)">
          <div class="calc-title-group" style="color: var(--color-spa)">
            <svg class="calc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <h3 class="calc-title">Dosificación Lavandería</h3>
          </div>
          <div class="calc-form">
            <div class="calc-input-group">
              <label class="calc-label">Peso Estimado de Carga Textil</label>
              <div class="calc-input-container">
                <input type="number" id="spa-vol" class="calc-input" value="30" min="1" max="500">
                <span class="calc-unit">kilogramos (kg) de blancos</span>
              </div>
            </div>
            <div class="calc-input-group">
              <label class="calc-label">Tipo de Suciedad / Fluidos</label>
              <select id="spa-intensity" class="calc-input calc-select">
                <option value="soft">Suciedad Leve (Consultorios / Lobbies)</option>
                <option value="medium" selected>Fluidos Corporales Leves (Habitaciones)</option>
                <option value="high">Fluidos Críticos / Sangre (Quirófano / Urgencias)</option>
              </select>
            </div>
            <div class="calc-input-group">
              <label class="calc-label">Producto a Dosificar</label>
              <select id="spa-product-type" class="calc-input calc-select" style="accent-color: var(--color-spa);">
                <option value="hldh" selected>HLDH (Detergente Clorado Oxigenante)</option>
                <option value="swipe">SWIPE original (Prelavado / Desmanchado)</option>
              </select>
            </div>
            <div class="calc-result-box" style="border-color: rgba(5, 230, 180, 0.15)">
              <span class="calc-result-value" id="spa-res" style="color: var(--color-spa)">450 g</span>
              <span class="calc-result-label">Cantidad Necesaria Estimada</span>
            </div>
          </div>
        </div>
      `;
      document.getElementById(containerId).innerHTML = html;

      const update = () => {
        const weight = parseFloat(document.getElementById("spa-vol").value) || 0;
        const level = document.getElementById("spa-intensity").value;
        const prod = document.getElementById("spa-product-type").value;
        
        let amount = 0;
        let unit = "g";

        if (prod === "hldh") {
          // HLDH: Leve 10g/kg, Medio 15g/kg, Crítico 20g/kg
          let factor = 15;
          if (level === "soft") factor = 10;
          if (level === "high") factor = 20;
          amount = weight * factor;
          unit = "g";
        } else {
          // SWIPE original prelavado: Leve 10ml/kg, Medio 15ml/kg, Crítico 25ml/kg
          let factor = 15;
          if (level === "soft") factor = 10;
          if (level === "high") factor = 25;
          amount = weight * factor;
          unit = "ml";
        }

        let output = "";
        if (unit === "g") {
          if (amount >= 1000) {
            output = `${(amount / 1000).toFixed(2)} kg`;
          } else {
            output = `${Math.round(amount)} g`;
          }
        } else {
          if (amount >= 1000) {
            output = `${(amount / 1000).toFixed(2)} L`;
          } else {
            output = `${Math.round(amount)} ml`;
          }
        }

        document.getElementById("spa-res").innerText = output;
      };

      document.getElementById("spa-vol").addEventListener("input", update);
      document.getElementById("spa-intensity").addEventListener("change", update);
      document.getElementById("spa-product-type").addEventListener("change", update);
      update();
    }
  },

  // 3. HABITACIONES DE PACIENTES - Estaciones de Higiene de Manos (historically col-gimnasio)
  gimnasio: {
    render: (containerId) => {
      const html = `
        <div class="calculator-card" style="border-color: var(--color-gimnasio)">
          <div class="calc-title-group" style="color: var(--color-gimnasio)">
            <svg class="calc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <h3 class="calc-title">Estaciones de Higiene</h3>
          </div>
          <div class="calc-form">
            <div class="calc-input-group">
              <label class="calc-label">Número de Estaciones / Dispensadores</label>
              <select id="gym-concentrate" class="calc-input calc-select">
                <option value="5">5 Estaciones</option>
                <option value="10" selected>10 Estaciones</option>
                <option value="20">20 Estaciones</option>
                <option value="50">50 Estaciones</option>
              </select>
            </div>
            <div class="calc-input-group">
              <label class="calc-label">Insumo de Higiene de Manos</label>
              <select id="gym-type" class="calc-input calc-select">
                <option value="soap">Hand Soap Germicida (Dosis 1.5 ml)</option>
                <option value="gel">Sani-Gel (Alcohol al 70% - Dosis 2.0 ml)</option>
              </select>
            </div>
            <div class="calc-input-group">
              <label class="calc-label">Frecuencia de Uso Diario (Por Estación)</label>
              <select id="gym-usage-frequency" class="calc-input calc-select">
                <option value="50" selected>Moderado (50 sanitizaciones/día)</option>
                <option value="150">Intensivo (150 sanitizaciones/día)</option>
              </select>
            </div>
            <div class="calc-result-box" style="border-color: rgba(255, 77, 45, 0.15); display: grid; grid-template-columns: 50% 50%; gap: 1rem; align-items: center;">
              <div>
                <span class="calc-result-value" id="gym-res-qty" style="color: var(--color-gimnasio)">750 ml</span>
                <span class="calc-result-label" style="font-size:0.65rem">Consumo Diario Estimado</span>
              </div>
              <div style="border-left: 1px solid rgba(255,255,255,0.08)">
                <span class="calc-result-value" id="gym-res-save" style="color: #10b981">5.3 días</span>
                <span class="calc-result-label" style="font-size:0.65rem">Durabilidad de Garrafa 4L</span>
              </div>
            </div>
          </div>
        </div>
      `;
      document.getElementById(containerId).innerHTML = html;

      const update = () => {
        const stations = parseFloat(document.getElementById("gym-concentrate").value);
        const type = document.getElementById("gym-type").value;
        const usage = parseFloat(document.getElementById("gym-usage-frequency").value);
        
        const dose = type === "soap" ? 1.5 : 2.0;
        const dailyConsumptionMl = stations * usage * dose;
        const bottleCapacityMl = 4000;
        const daysDuration = bottleCapacityMl / dailyConsumptionMl;

        let consumptionOutput = "";
        if (dailyConsumptionMl >= 1000) {
          consumptionOutput = `${(dailyConsumptionMl / 1000).toFixed(2)} Litros`;
        } else {
          consumptionOutput = `${Math.round(dailyConsumptionMl)} ml`;
        }

        document.getElementById("gym-res-qty").innerText = consumptionOutput;
        document.getElementById("gym-res-save").innerText = `${daysDuration.toFixed(1)} días`;
      };

      document.getElementById("gym-concentrate").addEventListener("change", update);
      document.getElementById("gym-type").addEventListener("change", update);
      document.getElementById("gym-usage-frequency").addEventListener("change", update);
      update();
    }
  },

  // 4. DIETOLOGÍA & COCINA - Protocolos de Inocuidad Alimentaria (historically col-gastronomia)
  gastronomia: {
    render: (containerId) => {
      const html = `
        <div class="calculator-card" style="border-color: var(--color-gastronomia)">
          <div class="calc-title-group" style="color: var(--color-gastronomia)">
            <svg class="calc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <h3 class="calc-title">Protocolo de Higiene H</h3>
          </div>
          <div class="calc-form">
            <div class="calc-input-group">
              <label class="calc-label">Seleccionar Tarea en Dietología/Cocina</label>
              <select id="gas-area" class="calc-input calc-select">
                <option value="grease">Campanas, Parrillas y Hornos (Cochambre)</option>
                <option value="dish">Lavado de Charolas y Vajillas de Pacientes</option>
                <option value="fruits">Desinfección de Ensaladas, Frutas y Verduras</option>
                <option value="surfaces">Mesas de Trabajo, Rebanadoras y Utensilios</option>
              </select>
            </div>
            
            <div id="gas-protocol-box" class="calc-result-box" style="border-color: rgba(255, 200, 55, 0.15); text-align: left; align-items: flex-start; padding: 1.2rem; font-size: 0.8rem; gap: 0.8rem;">
              <!-- Se inyecta dinámicamente -->
            </div>
          </div>
        </div>
      `;
      document.getElementById(containerId).innerHTML = html;

      const protocols = {
        grease: {
          product: "SWIPE original (Desengrasante)",
          dilution: "1:4 (Cochambre Pesado) a 1:12 (Limpieza)",
          steps: [
            "Apagar y dejar enfriar planchas, campanas o parrillas.",
            "Rociar la solución SWIPE 1:4 uniformemente sobre la grasa.",
            "Dejar reposar entre 5 y 10 minutos (sin que se seque).",
            "Tallar ligeramente con fibra verde y enjuagar con agua potable."
          ]
        },
        dish: {
          product: "Crystal DWM (Lavavajillas Mecánico)",
          dilution: "8 a 12 ml por ciclo (Inyección automática)",
          steps: [
            "Escamochar charolas retirando los residuos de comida gruesos.",
            "Colocar vajilla y charolas térmicas en racks sin encimar.",
            "El sistema inyectará la dosis exacta de Crystal DWM.",
            "Retirar del rack al secarse. Escurrimiento acelerado automático."
          ]
        },
        fruits: {
          product: "Veggiefruit Wash (Sanitizante Alimentos)",
          dilution: "1:100 (10 ml por litro de agua purificada)",
          steps: [
            "Lavar las verduras con agua potable para remover suciedad de tierra.",
            "Sumergir totalmente en solución Veggiefruit Wash 1:100.",
            "Mantener sumergido durante 1 minuto completo para desinfectar.",
            "Escurrir y enjuagar con agua purificada antes de servir."
          ]
        },
        surfaces: {
          product: "SWIPE original (Mesas y Charolas)",
          dilution: "1:100 (Mantenimiento) a 1:12 (Contacto)",
          steps: [
            "Limpiar restos sólidos e impurezas de las mesas de trabajo.",
            "Rociar la solución de SWIPE directamente en la superficie.",
            "Frotar firmemente con paño limpio y seco para retirar aceites.",
            "Garantiza una superficie libre de bacterias de transmisión alimenticia."
          ]
        }
      };

      const update = () => {
        const area = document.getElementById("gas-area").value;
        const data = protocols[area];
        
        let stepsHtml = data.steps.map((step, idx) => `
          <div style="display:flex; gap:0.5rem; line-height:1.4; margin-bottom:0.3rem;">
            <span style="color:var(--color-gastronomia); font-weight:bold;">${idx + 1}.</span>
            <span style="color:var(--color-glass-text);">${step}</span>
          </div>
        `).join("");

        document.getElementById("gas-protocol-box").innerHTML = `
          <div style="width:100%; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:0.5rem; margin-bottom:0.5rem; display:flex; justify-content:space-between; align-items:center;">
            <strong style="color:var(--color-text-white); font-family:var(--font-title); font-size:0.9rem;">${data.product}</strong>
            <span style="background:rgba(255,200,55,0.1); color:var(--color-gastronomia); padding:0.1rem 0.5rem; border-radius:4px; font-weight:bold; font-size:0.7rem;">Dil. ${data.dilution}</span>
          </div>
          <div style="width:100%;">
            <span style="font-size:0.65rem; color:var(--color-text-muted); text-transform:uppercase; letter-spacing:1px; display:block; margin-bottom:0.5rem;">Instrucciones del Protocolo</span>
            ${stepsHtml}
          </div>
        `;
      };

      document.getElementById("gas-area").addEventListener("change", update);
      update();
    }
  },

  // 5. SANITARIOS & BAÑOS - Dosificación de Sanitarios y Baños (historically col-mantenimiento)
  mantenimiento: {
    render: (containerId) => {
      const html = `
        <div class="calculator-card" style="border-color: var(--color-mantenimiento)">
          <div class="calc-title-group" style="color: var(--color-mantenimiento)">
            <svg class="calc-icon" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <h3 class="calc-title">Dosificación en Sanitarios</h3>
          </div>
          <div class="calc-form">
            <div class="calc-input-group">
              <label class="calc-label">Capacidad del Atomizador / Recipiente</label>
              <div class="calc-input-container">
                <input type="number" id="maint-vol" class="calc-input" value="500" min="50" max="100000">
                <span class="calc-unit">mililitros (ml)</span>
              </div>
            </div>
            <div class="calc-input-group">
              <label class="calc-label">Producto a Diluir</label>
              <select id="maint-dil" class="calc-input calc-select">
                <option value="brite">Brite (Desincrustante Ácido - Dil. 1:5)</option>
                <option value="swipol">Swipol (Sanitización Pisos/Lavabos - Dil. 1:100)</option>
                <option value="surething">Sure Thing (Neutralizador Olores - Dil. 1:15)</option>
              </select>
            </div>
            
            <div class="calc-result-box" style="border-color: rgba(138, 63, 252, 0.15); display: grid; grid-template-columns: 50% 50%; gap: 1rem; align-items: center;">
              <div>
                <span class="calc-result-value" id="maint-res-swipe" style="color: var(--color-mantenimiento)">83 ml</span>
                <span class="calc-result-label" style="font-size:0.65rem">Producto Swipe</span>
              </div>
              <div style="border-left: 1px solid rgba(255,255,255,0.08)">
                <span class="calc-result-value" id="maint-res-water" style="color: var(--color-glass-text)">417 ml</span>
                <span class="calc-result-label" style="font-size:0.65rem">Agua limpia</span>
              </div>
            </div>
          </div>
        </div>
      `;
      document.getElementById(containerId).innerHTML = html;

      const update = () => {
        const vol = parseFloat(document.getElementById("maint-vol").value) || 0;
        const prod = document.getElementById("maint-dil").value;
        
        let ratio = 5; // brite (1:5)
        if (prod === "swipol") ratio = 100;
        if (prod === "surething") ratio = 15;

        const totalParts = ratio + 1;
        const swipeMl = vol / totalParts;
        const waterMl = vol - swipeMl;

        let swipeOutput = "";
        let waterOutput = "";

        if (swipeMl >= 1000) {
          swipeOutput = `${(swipeMl / 1000).toFixed(2)} L`;
        } else {
          swipeOutput = `${Math.round(swipeMl)} ml`;
        }

        if (waterMl >= 1000) {
          waterOutput = `${(waterMl / 1000).toFixed(2)} L`;
        } else {
          waterOutput = `${Math.round(waterMl)} ml`;
        }

        document.getElementById("maint-res-swipe").innerText = swipeOutput;
        document.getElementById("maint-res-water").innerText = waterOutput;
      };

      document.getElementById("maint-vol").addEventListener("input", update);
      document.getElementById("maint-dil").addEventListener("change", update);
      update();
    }
  },

  // 6. AHORRO & ECOLOGÍA - Calculadora de Ahorro y Sustentabilidad
  ahorro: {
    render: (containerId) => {
      const html = `
        <div class="calculator-card" style="border-color: var(--color-ahorro)">
          <div class="calc-title-group" style="color: var(--color-ahorro)">
            <svg class="calc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <h3 class="calc-title">Simulador de Ahorro Anual</h3>
          </div>
          <div class="calc-form">
            <div class="calc-input-group">
              <label class="calc-label">Gasto Mensual Actual en Químicos</label>
              <div class="calc-input-container">
                <input type="number" id="eco-spend" class="calc-input" value="45000" min="5000" max="1000000">
                <span class="calc-unit">MXN / mes</span>
              </div>
            </div>
            <div class="calc-input-group">
              <label class="calc-label">Eficiencia Estimada Swipe</label>
              <select id="eco-efficiency" class="calc-input calc-select">
                <option value="35">Optimización Conservadora (35% Ahorro)</option>
                <option value="40" selected>Optimización Recomendada (40% Ahorro)</option>
                <option value="45">Optimización Máxima (45% Ahorro)</option>
              </select>
            </div>
            
            <div class="calc-result-box" style="border-color: rgba(168, 255, 120, 0.15); display: grid; grid-template-columns: 50% 50%; gap: 1rem; align-items: center;">
              <div>
                <span class="calc-result-value" id="eco-res-monthly" style="color: var(--color-ahorro)">$18,000</span>
                <span class="calc-result-label" style="font-size:0.65rem">Ahorro Mensual</span>
              </div>
              <div style="border-left: 1px solid rgba(255,255,255,0.08)">
                <span class="calc-result-value" id="eco-res-annual" style="color: #10b981">$216,000</span>
                <span class="calc-result-label" style="font-size:0.65rem">Ahorro Anual Est.</span>
              </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.02); padding: 0.8rem 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04); font-size: 0.75rem; text-align: center;">
              🌱 <strong>Impacto Ecológico Anual:</strong> <span id="eco-res-bottles" style="color: var(--color-ahorro); font-weight: bold;">1,800</span> envases plásticos de 1L menos en el medio ambiente gracias a las diluciones Swipe en el hospital.
            </div>
          </div>
        </div>
      `;
      document.getElementById(containerId).innerHTML = html;

      const update = () => {
        const spend = parseFloat(document.getElementById("eco-spend").value) || 0;
        const eff = parseFloat(document.getElementById("eco-efficiency").value);
        
        const monthlySave = spend * (eff / 100);
        const annualSave = monthlySave * 12;
        
        const bottlesSaved = Math.round((spend / 300) * 12);

        document.getElementById("eco-res-monthly").innerText = `$${Math.round(monthlySave).toLocaleString("es-MX")} MXN`;
        document.getElementById("eco-res-annual").innerText = `$${Math.round(annualSave).toLocaleString("es-MX")} MXN`;
        document.getElementById("eco-res-bottles").innerText = bottlesSaved.toLocaleString("es-MX");
      };

      document.getElementById("eco-spend").addEventListener("input", update);
      document.getElementById("eco-efficiency").addEventListener("change", update);
      update();
    }
  },

  // 7. DEMO - Formulario de Programación de Demostraciones en Vivo
  demo: {
    render: (containerId) => {
      const html = `
        <div class="calculator-card" style="border-color: var(--color-demo)" id="demo-card-container">
          <div class="calc-title-group" style="color: var(--color-demo)">
            <svg class="calc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <h3 class="calc-title">Agendar Prueba en Sitio</h3>
          </div>
          <form class="calc-form" id="demo-booking-form">
            <div class="calc-input-group">
              <label class="calc-label">Área del Hospital a Probar</label>
              <select id="demo-area" class="calc-input calc-select" required>
                <option value="Quirófanos & UCI">Quirófanos & UCI: Desinfección Crítica</option>
                <option value="Lavandería Clínica">Lavandería Clínica: Asepsia Textil</option>
                <option value="Habitaciones de Pacientes">Habitaciones de Pacientes: Estaciones de Higiene</option>
                <option value="Dietología & Cocina">Dietología & Cocina: Inocuidad Alimentaria</option>
                <option value="Sanitarios & Baños">Sanitarios & Baños: Control de Sarro y Olores</option>
              </select>
            </div>
            <div class="calc-input-group">
              <label class="calc-label">Fecha Propuesta</label>
              <input type="date" id="demo-date" class="calc-input" required>
            </div>
            <div class="calc-input-group">
              <label class="calc-label">Horario Preferido</label>
              <select id="demo-time" class="calc-input calc-select" required>
                <option value="09:00 AM">Mañana (09:00 AM)</option>
                <option value="12:00 PM" selected>Mediodía (12:00 PM)</option>
                <option value="04:00 PM">Tarde (04:00 PM)</option>
              </select>
            </div>
            
            <button type="submit" class="quotes-btn-submit" style="background: linear-gradient(135deg, var(--color-demo) 0%, #61003f 100%); color: #fff; box-shadow: 0 10px 20px var(--color-demo-glow); border: none; padding: 0.8rem; font-family: var(--font-title); font-weight:800; font-size:0.85rem; border-radius:8px; cursor:pointer; text-transform:uppercase; margin-top:0.5rem;">
              Solicitar Demostración
            </button>
          </form>
        </div>
      `;
      document.getElementById(containerId).innerHTML = html;

      // Establecer fecha mínima como mañana
      const today = new Date();
      today.setDate(today.getDate() + 1);
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1;
      let dd = today.getDate();
      if (mm < 10) mm = '0' + mm;
      if (dd < 10) dd = '0' + dd;
      document.getElementById("demo-date").value = `${yyyy}-${mm}-${dd}`;
      document.getElementById("demo-date").min = `${yyyy}-${mm}-${dd}`;

      // Manejador de reserva
      document.getElementById("demo-booking-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const areaSelected = document.getElementById("demo-area").value;
        const dateVal = document.getElementById("demo-date").value;
        const timeVal = document.getElementById("demo-time").value;

        // Formatear fecha
        const dateParts = dateVal.split("-");
        const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

        // Redirección a WhatsApp
        const textMessage = `¡Hola! Me gustaría agendar una demostración de productos Swipe en el Hospital Arboledas para el área de *${areaSelected}*.\n\n📅 *Fecha propuesta:* ${formattedDate}\n⏰ *Horario:* ${timeVal}`;
        const whatsappUrl = `https://wa.me/523321918862?text=${encodeURIComponent(textMessage)}`;
        window.open(whatsappUrl, '_blank');

        document.getElementById("demo-card-container").innerHTML = `
          <div class="quotes-success-msg" style="padding: 1.5rem 0;">
            <div class="success-icon-container" style="width:60px; height:60px; font-size:1.8rem; border-color: rgba(248, 87, 166, 0.4); color: var(--color-demo); box-shadow: 0 0 15px var(--color-demo-glow); margin: 0 auto;">✓</div>
            <h4 style="font-family: var(--font-title); font-size: 1.2rem; color: #fff; margin-top: 0.5rem; text-align:center;">¡Demo Solicitada!</h4>
            <p style="font-size: 0.8rem; line-height: 1.5; color: var(--color-text-muted); text-align: center; margin-top:0.5rem;">
              Te hemos redirigido a WhatsApp para coordinar tu demostración en el área de <strong>${areaSelected}</strong> el día <strong>${formattedDate}</strong> a las <strong>${timeVal}</strong>.
            </p>
            <p style="font-size: 0.75rem; color: var(--color-demo); font-weight:600; margin-top:0.5rem; text-align:center;">
              Si no se abrió la ventana de WhatsApp, puedes hacer click en el enlace para enviar el mensaje.
            </p>
            <button class="btn-details" onclick="CALCULATORS.demo.render('${containerId}')" style="margin: 1rem auto 0 auto; border-color: rgba(255,255,255,0.1); font-size: 0.75rem; padding: 0.5rem 1rem;">Agendar Otra Prueba</button>
          </div>
        `;
      });
    }
  }
};
