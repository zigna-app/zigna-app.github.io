---
layout: page
namespace: home
permalink: /
title: Home
---

<!-- ======= Hero Section ======= -->
<section id="intro" class="hero-section">
    <div class="hero-background"></div>
    <div class="hero-circles">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
    </div>
    <div class="container hero-content" data-aos="fade-up">
        <div class="row align-items-center">
            <div class="col-lg-6 intro-info" data-aos="zoom-in" data-aos-delay="100">
                <h1 class="hero-title">{% t hero.title %} <span class="highlight">{% t hero.highlight %}</span></h1>
                <p class="hero-subtitle">{% t hero.subtitle %}</p>
                <div class="hero-cta">
                    <a href="https://www.zigna.app/signup" class="btn-get-started">{% t hero.get_started %}</a>
                    <a href="https://www.zigna.app/login" class="btn-secondary">{% t hero.sign_in %}</a>
                </div>
            </div>
            <div class="col-lg-6 intro-img" data-aos="zoom-out" data-aos-delay="200">
                <img src="{{ site.baseurl_root }}/assets/img/hero-ai.png" alt="{% t hero.alt_tutor %}" class="img-fluid floating_animation">
            </div>
        </div>
    </div>
</section><!-- End Hero Section -->

<main id="main">
    <!-- ======= Features Section ======= -->
    <section id="features" class="features-section">
        <div class="container" data-aos="fade-up">
            <header class="section-header">
                <h2>{% t features.title %}</h2>
                <p>{% t features.subtitle %}</p>
            </header>
            <div class="row features-grid">
                <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fa fa-graduation-cap"></i>
                        </div>
                        <h3>{% t features.professor.title %}</h3>
                        <p>{% t features.professor.text %}</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fa fa-comments"></i>
                        </div>
                        <h3>{% t features.chat.title %}</h3>
                        <p>{% t features.chat.text %}</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fa fa-line-chart"></i>
                        </div>
                        <h3>{% t features.intelligence.title %}</h3>
                        <p>{% t features.intelligence.text %}</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fa fa-shield"></i>
                        </div>
                        <h3>{% t features.risk_free.title %}</h3>
                        <p>{% t features.risk_free.text %}</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fa fa-bell"></i>
                        </div>
                        <h3>{% t features.alerts.title %}</h3>
                        <p>{% t features.alerts.text %}</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fa fa-users"></i>
                        </div>
                        <h3>{% t features.multiasset.title %}</h3>
                        <p>{% t features.multiasset.text %}</p>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- End Features Section -->
    <!-- ======= How It Works Section ======= -->
    <section id="how-it-works" class="how-it-works-section">
        <div class="container" data-aos="fade-up">
            <header class="section-header">
                <h2>{% t how.title %}</h2>
                <p>{% t how.subtitle %}</p>
            </header>
            <div class="row">
                <div class="col-lg-4 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div class="step-card">
                        <div class="step-number">1</div>
                        <h3>{% t how.step1.title %}</h3>
                        <p>{% t how.step1.text %}</p>
                    </div>
                </div>
                <div class="col-lg-4 text-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="step-card">
                        <div class="step-number">2</div>
                        <h3>{% t how.step2.title %}</h3>
                        <p>{% t how.step2.text %}</p>
                    </div>
                </div>
                <div class="col-lg-4 text-center" data-aos="fade-up" data-aos-delay="300">
                    <div class="step-card">
                        <div class="step-number">3</div>
                        <h3>{% t how.step3.title %}</h3>
                        <p>{% t how.step3.text %}</p>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- End How It Works Section -->
    <!-- ======= Pricing Section ======= -->
    <section id="pricing" class="pricing-section">
        <div class="container" data-aos="fade-up">
            <header class="section-header">
                <h2>{% t pricing.title %}</h2>
                <p>{% t pricing.subtitle %}</p>
            </header>
            <div class="row">
                <div class="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="pricing-card">
                        <div class="card-body">
                            <h3 class="plan-name">{% t pricing.starter.name %}</h3>
                            <div class="plan-price">{% t pricing.starter.price %}<span>{% t pricing.starter.period %}</span></div>
                            <ul class="plan-features">
                                <li><i class="fa fa-check"></i> 3 {% t pricing.features.portfolios %}</li>
                                <li><i class="fa fa-check"></i> 10 {% t pricing.features.alarms %}</li>
                                <li><i class="fa fa-check"></i> {% t pricing.features.rag_200k %}</li>
                                <li><i class="fa fa-check"></i> {% t pricing.features.insights_8 %}</li>
                                <li><i class="fa fa-check"></i> {% t pricing.features.personalization %}</li>
                                <li><i class="fa fa-check"></i> {% t pricing.features.support_email %}</li>
                            </ul>
                            <a href="https://www.zigna.app/signup?plan=starter" class="btn-pricing">
                            {% t pricing.starter.btn %}</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="pricing-card highlighted">
                        <div class="best-value">{% t pricing.best_value %}</div>
                        <div class="card-body">
                            <h3 class="plan-name">{% t pricing.pro.name %}</h3>
                            <div class="plan-price">{% t pricing.pro.price %}<span>{% t pricing.starter.period %}</span></div>
                            <ul class="plan-features">
                                <li><i class="fa fa-check"></i> 10 {% t pricing.features.portfolios %}</li>
                                <li><i class="fa fa-check"></i> 50 {% t pricing.features.alarms %}</li>
                                <li><i class="fa fa-check"></i> {% t pricing.features.rag_1m %}</li>
                                <li><i class="fa fa-check"></i> {% t pricing.features.insights_2 %}</li>
                                <li><i class="fa fa-check"></i> {% t pricing.features.customization %}</li>
                                <li><i class="fa fa-check"></i> {% t pricing.features.support_priority %}</li>
                            </ul>
                            <a href="https://www.zigna.app/signup?plan=pro" class="btn-pricing primary">{% t pricing.pro.btn %}</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div class="pricing-card">
                        <div class="card-body">
                            <h3 class="plan-name">{% t pricing.enterprise.name %}</h3>
                            <div class="plan-price">{% t pricing.enterprise.price %}<span>{% t pricing.starter.period %}</span></div>
                            <ul class="plan-features">
                                <li><i class="fa fa-check"></i> 50 {% t pricing.features.portfolios %}</li>
                                <li><i class="fa fa-check"></i> 200 {% t pricing.features.alarms %}</li>
                                <li><i class="fa fa-check"></i> {% t pricing.features.rag_5m %}</li>
                                <li><i class="fa fa-check"></i> {% t pricing.features.streaming %}</li>
                                <li><i class="fa fa-check"></i> {% t pricing.features.api %}</li>
                                <li><i class="fa fa-check"></i> {% t pricing.features.support_dedicated %}</li>
                            </ul>
                            <a href="https://www.zigna.app/signup?plan=enterprise" class="btn-pricing">{% t pricing.enterprise.btn %}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- End Pricing Section -->
    <!-- ======= CTA Section ======= -->
    <section id="cta" class="cta-section">
        <div class="container" data-aos="fade-up">
            <div class="row">
                <div class="col-lg-8 offset-lg-2 text-center">
                    <h2>{% t cta.title %}</h2>
                    <p>{% t cta.text %}</p>
                    <a href="https://www.zigna.app/signup" class="btn-cta">{% t cta.btn %}</a>
                    <p class="cta-note">{% t cta.note %}</p>
                </div>
            </div>
        </div>
    </section><!-- End CTA Section -->
    <!-- ======= Contact Section ======= -->
    <section id="contact">
        <div class="container-fluid" data-aos="fade-up">
            <div class="section-header">
                <h3>{% t contact.title %}</h3>
                <p>{% t contact.subtitle %}</p>
            </div>
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="form">
                        <form class="php-email-form" name="zigna-contacto" netlify data-recaptcha-sitekey="6Ldr68YZAAAAAJ3gOn0JI3Sd-KabCsfkIQNDsluz">
                            <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response">
                            <div class="form-row">
                                <div class="form-group col-lg-6">
                                    <input type="text" name="nombre" class="form-control" id="nombre"
                                        placeholder="{% t contact.name_placeholder %}" data-rule="minlen:4" data-msg="{% t contact.min_chars %}" />
                                    <div class="validate"></div>
                                </div>
                                <div class="form-group col-lg-6">
                                    <input type="email" class="form-control" name="email" id="email"
                                        placeholder="{% t contact.email_placeholder %}" data-rule="email" data-msg="{% t contact.email_error %}" />
                                    <div class="validate"></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" name="mensaje" id="message" rows="5"
                                    data-msg="{% t contact.message_optional %}" placeholder="{% t contact.message_placeholder %}"></textarea>
                            </div>
                            <div class="my-3">
                                <div class="loading">{% t contact.loading %}</div>
                                <div class="error-message">{% t contact.error %}</div>
                                <div class="sent-message">{% t contact.success %}</div>
                            </div>
                            <div class="text-center">
                                <button type="submit" title="{% t contact.send_title %}" class="fa-inactive">{% t contact.btn %}</button>
                            </div>
                            <div id="recaptcha-container"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- End Contact Section -->
</main><!-- End #main -->
